import {BehaviorSubject} from 'rxjs';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material';

export class LinkNode {
  title: string;
  disabled: boolean;
  path: string;
  linkIcon: string;
  active: boolean;
  params?: any;
  code: string;
  children?: LinkNode[];
}

export class LinkFlatNode {
  title: string;
  disabled: boolean;
  path: string;
  linkIcon: string;
  code: string;
  level: number;
  expandable: boolean;
  active: boolean;
  params?: any;
}

export class LinkTree {
  // Map from flat node to nested node. This helps us finding the nested node to be modified
  flatNodeMap = new Map<LinkFlatNode, LinkNode>();
  // Map from nested node to flattened node. This helps us to keep the same object for selection
  nestedNodeMap = new Map<LinkNode, LinkFlatNode>();

  startingLevel;
  treeData: any[];
  dataSource: MatTreeFlatDataSource<LinkNode, LinkFlatNode>;
  dataChange = new BehaviorSubject<LinkNode[]>([]);

  treeFlattener: MatTreeFlattener<LinkNode, LinkFlatNode>;
  treeControl: FlatTreeControl<LinkFlatNode>;

  constructor(level, dataSource) {
    this.startingLevel = level;
    this.treeData = dataSource;
    this.initialize(this.startingLevel,  this.treeData);
  }

  initialize(level, treeData) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<LinkFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource =  new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    const data = this.buildTree(treeData, level);
    this.dataChange.next(data);
  }

  // gets the current level to build a tree structure, mapping tree data in a form of LinkNode and then tries to build it recursively
  buildTree(treeData: any[], level: string): LinkNode[] {
    return treeData.filter(node =>
      (<string>node.code).startsWith(level + '.') && (node.code.match(/\./g) || []).length === (level.match(/\./g) || []).length + 1
    ).map(o => {
      const node = new LinkNode();
      node.code = o.code;
      node.title = o.title;
      node.disabled = o.disabled;
      node.path = o.path;
      node.linkIcon = o.linkIcon;
      node.active = o.active;
      node.params = o.params;

      // checks if a node has children and builds subtree recursively
      const children = treeData.filter(so => (<string>so.code).startsWith(level + '.'));
      if (children && children.length > 0) {
        node.children = this.buildTree(children, o.code);
      }
      return node;
    });
  }

  filter(filterText: string) {
    let filteredTreeData;

    if (filterText) {
      // filters out nodes whose title starts with a given input string
      filteredTreeData = this.treeData
        .filter(d => d.title.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) > -1);

      // checks if there's a node that has a parent which is then appended to the filtered array in order to get a proper tree structure
      Object.assign([], filteredTreeData).forEach(ftd => {
        let code = (<string>ftd.code);

        while (code.lastIndexOf('.') > -1) {
          const index = code.lastIndexOf('.');
          code = code.substring(0, index);

          if (filteredTreeData.findIndex(t => t.code === code) === -1) {
            const obj = this.treeData.find(d => d.code === code);
            if (obj) {
              filteredTreeData.push(obj);
            }
          }
        }
      });
    } else {
      filteredTreeData = this.treeData;
    }

    // checks if there's a node that is a parent and appends all its children to the filtered array
    filteredTreeData.forEach(node => {
      const code = (<string>node.code);

      if (filteredTreeData.filter(t => t.code.includes(code) && t.code !== code).length === 0) {
        const children = this.treeData.filter(childNode => {
          if (childNode.code.startsWith(code + '.') && childNode.code !== code) {
            return childNode;
          }
        });
        if (children.length > 0) {
          children.forEach(child => filteredTreeData.push(child));
        }
      }
    });

    const data = this.buildTree(filteredTreeData, '0');
    this.dataChange.next(data);
  }

  filterChanged(filterText: string) {
    this.filter(filterText);

    if (filterText.length >= 2) {
      this.treeControl.expandAll();
    } else {
      this.treeControl.collapseAll();
    }
  }

  findAndExpand(codes) {
    codes.forEach(code => {
      this.treeControl.dataNodes.forEach(node => {
        if (node.code === code) {
          node.active = true;
          if (node.expandable) {
            node.active = false;
            this.treeControl.expand(node);
          }
        } else {
          node.active = false;
        }
      });
    });
  }

  getLevel = (node: LinkFlatNode) => node.level;
  isExpandable = (node: LinkFlatNode) => node.expandable;
  getChildren = (node: LinkNode): LinkNode[] => node.children;
  hasChild = (_: number, _nodeData: LinkFlatNode) => _nodeData.expandable;
  transformer = (node: LinkNode, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode = existingNode && existingNode.title === node.title ? existingNode : new LinkFlatNode();
    flatNode.title = node.title;
    flatNode.disabled = node.disabled;
    flatNode.path = node.path;
    flatNode.linkIcon = node.linkIcon;
    flatNode.code = node.code;
    flatNode.active = node.active;
    flatNode.params = node.params;
    flatNode.level = level;

    flatNode.expandable = node.children && node.children.length > 0;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }
  // private transformer = (node: LinkNode, level: number) => {
  //   return {
  //     expandable: !!node.children && node.children.length > 0,
  //     title: node.title,
  //     disabled: node.disabled,
  //     path: node.path,
  //     linkIcon: node.linkIcon,
  //     active: node.active,
  //     level: level,
  //   };
  // }
}

import { Component, OnInit } from '@angular/core';

import { LinkTree } from './sidemenu-tree';
import { LINK_DATA } from './tree-data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  linkTree: LinkTree;
  dataSourceSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.linkTree = new LinkTree('0', LINK_DATA);

    this.dataSourceSubscription = this.linkTree.dataChange.subscribe(data => {
      this.linkTree.dataSource.data = data
    });
  }

  setLinkPadding(node) {
    return node.level === 0 ? '1.5rem' : (node.level * 1.5) + 1.5 + 'rem';
  }
}
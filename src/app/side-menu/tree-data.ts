export const LINK_DATA = [
  {
    title: 'dashboard',
    disabled: false,
    path: '/',
    linkIcon: 'dashboard',
    active: false,
    code: '0.11',
    expandable: false
  },
  {
    title: 'clients',
    disabled: false,
    path: '/clients',
    linkIcon: 'people_outline',
    active: false,
    code: '0.1',
    expandable: true
  },
  {
    title: 'delivery_lines',
    disabled: false,
    path: '',
    linkIcon: 'markunread_mailbox',
    active: false,
    code: '0.2',
    expandable: true
  },
  {
    title: 'sidemenu_sales',
    disabled: false,
    path: 'delivery-process/sales',
    linkIcon: 'done',
    active: false,
    code: '0.2.1',
    expandable: false,
    params: {
      progressOrder: 0,
      statusOrder: 'Required,Workable,Ordered,Not_available,Temporarily_not_available,Suspended,Delivered'
    }
  },
  {
    title: 'sidemenu_backoffice',
    disabled: false,
    path: 'delivery-process/backoffice',
    linkIcon: 'done',
    active: false,
    code: '0.2.2',
    expandable: false,
    params: {
      progressOrder: 1,
      statusOrder: 'Required,Workable,Ordered,Not_available,Temporarily_not_available,Suspended,Delivered'
    }
  },
  {
    title: 'sidemenu_delivery',
    disabled: false,
    path: 'delivery-process/delivery',
    linkIcon: 'done',
    active: false,
    code: '0.2.3',
    expandable: false,
    params: {
      progressOrder: 3,
      statusOrder: 'Required,Workable,Ordered,Not_available,Temporarily_not_available,Suspended,Delivered'
    }
  },
  {
    title: 'delivery_data',
    disabled: false,
    path: 'delivery-process/delivery-data',
    linkIcon: 'done',
    active: false,
    code: '0.2.4',
    expandable: false,
    params: {
      progressOrder: 7,
      statusOrder: 'Required,Workable,Ordered,Not_available,Temporarily_not_available,Suspended,Delivered'
    }
  },
  {
    title: 'delivery_voice',
    disabled: false,
    path: 'delivery-process/delivery-voice',
    linkIcon: 'done',
    active: false,
    code: '0.2.5',
    expandable: false,
    params: {
      progressOrder: 15,
      statusOrder: 'Required,Workable,Ordered,Not_available,Temporarily_not_available,Suspended,Delivered'
    }
  },
  {
    title: 'HW_delivered',
    disabled: false,
    path: 'delivery-process/hw-delivered',
    linkIcon: 'done',
    active: false,
    code: '0.2.6',
    expandable: false,
    params: {
      progressOrder: 31,
      statusOrder: 'Required,Workable,Ordered,Not_available,Temporarily_not_available,Suspended,Delivered'
    }
  },
  {
    title: 'HW_configured',
    disabled: false,
    path: 'delivery-process/hw-configured',
    linkIcon: 'done',
    active: false,
    code: '0.2.7',
    expandable: false,
    params: {
      progressOrder: 8223,
      statusOrder: 'Required,Workable,Ordered,Not_available,Temporarily_not_available,Suspended,Delivered'
    }
  },
  {
    title: 'delivery_logistic',
    disabled: false,
    path: 'delivery-process/delivery-logistic',
    linkIcon: 'done',
    active: false,
    code: '0.2.8',
    expandable: false,
    params: {
      progressOrder: 24607,
      statusOrder: 'Required,Workable,Ordered,Not_available,Temporarily_not_available,Suspended,Delivered'
    }
  },
  {
    title: 'delivery_appointment',
    disabled: false,
    path: 'delivery-process/delivery-appointment',
    linkIcon: 'done',
    active: false,
    code: '0.2.10',
    expandable: false,
    params: {
      progressOrder: 24639,
      statusOrder: 'Required,Workable,Ordered,Not_available,Temporarily_not_available,Suspended,Delivered'
    }
  },
  {
    title: 'delivery_installed',
    disabled: false,
    path: 'delivery-process/delivery-installed',
    linkIcon: 'done',
    active: false,
    code: '0.2.11',
    expandable: false,
    params: {
      progressOrder: 24767,
      statusOrder: 'Required,Workable,Ordered,Not_available,Temporarily_not_available,Suspended,Delivered'
    }
  },
  {
    title: 'delivery_monitoring',
    disabled: false,
    path: 'delivery-process/delivery-monitoring',
    linkIcon: 'done',
    active: false,
    code: '0.2.12',
    expandable: false,
    params: {
      progressOrder: 25023,
      statusOrder: 'Required,Workable,Ordered,Not_available,Temporarily_not_available,Suspended,Delivered'
    }
  },
  {
    title: 'delivery_docu',
    disabled: false,
    path: 'delivery-process/delivery-documents',
    linkIcon: 'done',
    active: false,
    code: '0.2.13',
    expandable: false,
    params: {
      progressOrder: 26047,
      statusOrder: 'Required,Workable,Ordered,Not_available,Temporarily_not_available,Suspended,Delivered'
    }
  },
  {
    title: 'sidemenu_support',
    disabled: false,
    path: 'delivery-process/support',
    linkIcon: 'done',
    active: false,
    code: '0.2.14',
    expandable: false,
    params: {
      progressOrder: 26559,
      statusOrder: 'Required,Workable,Ordered,Not_available,Temporarily_not_available,Suspended,Delivered'
    }
  },
  {
    title: 'delivery_invoice',
    disabled: false,
    path: 'delivery-process/delivery-invoice',
    linkIcon: 'done',
    active: false,
    code: '0.2.15',
    expandable: false,
    params: {
      progressOrder: 30655,
      statusOrder: 'Required,Workable,Ordered,Not_available,Temporarily_not_available,Suspended,Delivered'
    }
  },
  {
    title: 'sidemenu_sales',
    disabled: false,
    path: '',
    linkIcon: 'euro_symbol',
    active: false,
    code: '0.3',
    expandable: true
  },
  {
    title: 'contracts',
    disabled: true,
    path: '/orders',
    linkIcon: 'library_books',
    active: false,
    code: '0.3.1',
    expandable: false
  },
  {
    title: 'backoffice',
    disabled: false,
    path: '',
    linkIcon: 'business',
    active: false,
    code: '0.4',
    expandable: true
  },
  {
    title: 'orders',
    disabled: false,
    path: '/backoffice/orders',
    linkIcon: 'library_books',
    active: false,
    code: '0.4.1',
    expandable: false
  },
  {
    title: 'logistics',
    disabled: false,
    path: '',
    linkIcon: 'pan_tool',
    active: false,
    code: '0.5',
    expandable: true
  },
  {
    title: 'acquisition',
    disabled: false,
    path: '/logistics/acquisition',
    linkIcon: 'add_to_home_screen',
    active: false,
    code: '0.5.1',
    expandable: false
  },
  {
    title: 'ocr',
    disabled: false,
    path: '/logistics/ocr',
    linkIcon: 'devices',
    active: false,
    code: '0.5.2',
    expandable: false
  },
  {
    title: 'devices',
    disabled: false,
    path: '/logistics/devices',
    linkIcon: 'archive',
    active: false,
    code: '0.5.3',
    expandable: false
  },
  {
    title: 'amortization',
    disabled: true,
    path: '/logistics/orders',
    linkIcon: 'monetization_on',
    active: false,
    code: '0.5.4',
    expandable: false
  },
  {
    title: 'delivery',
    disabled: false,
    path: '',
    linkIcon: 'markunread_mailbox',
    active: false,
    code: '0.6',
    expandable: true
  },
  {
    title: 'installationTickets',
    disabled: false,
    path: '/delivery/ins-tickets',
    linkIcon: 'assignment',
    active: false,
    code: '0.6.1',
    expandable: false,
    params: {
      type: 'SAI'
    }
  },
  {
    title: 'visualization',
    disabled: false,
    path: '/delivery/visualization',
    linkIcon: 'public',
    active: false,
    code: '0.6.2',
    expandable: false,
    params: {
      type: 'SAS,SAI,ICT,DEV',
      status: 'InBearbeitung,InWartestellung,NichtBegonnen,Zuruckgestelltn',
      priority: 'Hoch,Mittel,Niedrig'
    }
  },
  {
    title: 'sidemenu_support',
    disabled: false,
    path: '',
    linkIcon: 'contact_support',
    active: false,
    code: '0.7',
    expandable: true
  },
  {
    title: 'supportTickets',
    disabled: false,
    path: '/support/support-tickets',
    linkIcon: 'assignment',
    active: false,
    code: '0.7.1',
    expandable: true,
    params: {
      type: 'SAS'
    }
  },
  {
    title: 'visualization',
    disabled: false,
    path: '/support/visualization',
    linkIcon: 'public',
    active: false,
    code: '0.7.2',
    expandable: false,
    params: {
      type: 'SAS',
      status: 'InBearbeitung,InWartestellung,NichtBegonnen,Zuruckgestelltn',
      priority: 'Hoch,Mittel,Niedrig'
    }
  },
  {
    title: 'tools',
    disabled: false,
    path: '',
    linkIcon: 'build',
    active: false,
    code: '0.8',
    expandable: true
  },
  {
    title: 'tim-linetest',
    disabled: false,
    path: '/tools/tim-linetest',
    linkIcon: 'transfer_within_a_station',
    active: false,
    code: '0.8.1',
    expandable: false
  },
  {
    title: 'ping',
    disabled: true,
    path: '/tools/ping',
    linkIcon: 'compare_arrows',
    active: false,
    code: '0.8.3',
    expandable: false
  },
  {
    title: 'speed-test',
    disabled: true,
    path: '/tools/speed-test',
    linkIcon: 'network_check',
    active: false,
    code: '0.8.4',
    expandable: false
  },
  {
    title: 'admin',
    disabled: false,
    path: '',
    linkIcon: 'grade',
    active: false,
    code: '0.9',
    expandable: true
  },
  {
    title: 'configuration',
    disabled: false,
    path: '/admin/configuration/news',
    linkIcon: 'settings',
    active: false,
    code: '0.9.1',
    expandable: true
  },
  {
    title: 'news',
    disabled: true,
    path: '/admin/configuration/news',
    linkIcon: 'rss_feed',
    active: false,
    code: '0.9.1.1',
    expandable: false
  },
  {
    title: 'launcher',
    disabled: false,
    path: '/admin/configuration/launcher',
    linkIcon: 'launch',
    active: false,
    code: '0.9.1.2',
    expandable: false
  },
  {
    title: 'userManagement',
    disabled: false,
    path: '/admin/configuration/usermanagement/user-list',
    linkIcon: 'people_outline',
    active: false,
    code: '0.9.1.3',
    expandable: false
  },
  {
    title: 'clientManagement',
    disabled: false,
    path: '/admin/configuration/clientmanagement/client-list',
    linkIcon: 'people_outline',
    active: false,
    code: '0.9.1.4',
    expandable: false
  },
  {
    title: 'dashboard',
    disabled: true,
    path: '/admin/configuration/dashboard',
    linkIcon: 'dashboard',
    active: false,
    code: '0.9.1.5',
    expandable: false
  },
  {
    title: 'wiki',
    disabled: true,
    path: '/admin/configuration/wiki',
    linkIcon: 'book',
    active: false,
    code: '0.9.1.6',
    expandable: false
  },
  {
    title: 'sidemenu_sales',
    disabled: true,
    path: '/admin/configuration/sales',
    linkIcon: 'euro_symbol',
    active: false,
    code: '0.9.1.7',
    expandable: false
  },
  {
    title: 'backoffice',
    disabled: true,
    path: '/admin/configuration/backoffice',
    linkIcon: 'business',
    active: false,
    code: '0.9.1.8',
    expandable: false
  },
  {
    title: 'delivery',
    disabled: true,
    path: '/admin/configuration/delivery',
    linkIcon: 'markunread_mailbox',
    active: false,
    code: '0.9.1.9',
    expandable: false
  },
  {
    title: 'sidemenu_support',
    disabled: true,
    path: '/admin/configuration/support',
    linkIcon: 'contact_support',
    active: false,
    code: '0.9.1.10',
    expandable: false
  },
  {
    title: 'activityLog',
    disabled: false,
    path: '/admin/activity-log',
    linkIcon: 'dehaze',
    active: false,
    code: '0.9.2',
    expandable: false
  },
  {
    title: 'monitor',
    disabled: false,
    path: '/admin/monitor',
    linkIcon: 'notification_important',
    active: false,
    code: '0.9.3',
    expandable: false
  },
  {
    title: 'news',
    disabled: false,
    path: '/news',
    linkIcon: 'rss_feed',
    active: false,
    code: '0.10',
    expandable: false
  },
  {
    title: 'launcher',
    disabled: false,
    path: '/launcher',
    linkIcon: 'launch',
    active: false,
    code: '0.12',
    expandable: false
  },
  {
    title: 'team',
    disabled: true,
    path: '/team',
    linkIcon: 'calendar_today',
    active: false,
    code: '0.13',
    expandable: false
  },
  {
    title: 'wiki',
    disabled: false,
    path: '/wiki',
    linkIcon: 'book',
    active: false,
    code: '0.14',
    expandable: false
  }
];

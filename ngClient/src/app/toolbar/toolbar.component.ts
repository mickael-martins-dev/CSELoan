import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label:'File',
          icon:'pi pi-fw pi-file',
          items:[
              {
                  label:'New',
                  icon:'pi pi-fw pi-plus',
                  items:[
                  {
                      label:'Bookmark',
                      icon:'pi pi-fw pi-bookmark'
                  },
                  {
                      label:'Video',
                      icon:'pi pi-fw pi-video'
                  },

                  ]
              },
              {
                  label:'Delete',
                  icon:'pi pi-fw pi-trash'
              },
              {
                  separator:true
              },
              {
                  label:'Export',
                  icon:'pi pi-fw pi-external-link'
              }
          ]
      }
  ];
  }

}

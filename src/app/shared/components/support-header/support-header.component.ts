import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'shared-support-header',
  templateUrl: './support-header.component.html',
  styleUrls: ['./support-header.component.css']
})
export class SupportHeaderComponent implements OnInit {
  public showHelp: boolean = false;
  public header;
  public levelOne = [];
  public lowerLevels = [];

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit() {
    this.header = this.headerService.headerJson;
    this.traverse(this.header);

    // this.headerService.getHeaderData().subscribe(
    //   res => {
    //     this.header = res;
    //     this.traverse(this.header);
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
  }

  traverse(jsonObj) {
    for (let i = 0; i < jsonObj.menus.length; i++) {

      let l1 = {
        name: jsonObj.menus[i].name,
        url: jsonObj.menus[i].actionUrl,
        trigger: null
      };
      this.levelOne.push(l1);
      //Second Level
      if (jsonObj.menus[i].submenus) {
        l1.trigger = jsonObj.menus[i].name;
        let l2 = {
          tRef: {
            tRef: jsonObj.menus[i].name
          },
          menuOptions: []
        }
        for (let j = 0; j < jsonObj.menus[i].submenus.length; j++) {

          let l2Option = {
            name: jsonObj.menus[i].submenus[j].name,
            url: jsonObj.menus[i].submenus[j].actionUrl,
            trigger: null
          }
          l2.menuOptions.push(l2Option)

          if (j == jsonObj.menus[i].submenus.length - 1) {
            this.lowerLevels.push(l2);
          }

          //Third Level
          if (jsonObj.menus[i].submenus[j].submenus) {
            let l3 = {
              tRef: {
                tRef: jsonObj.menus[i].name
              },
              menuOptions: []
            }

            for (let k = 0; k < jsonObj.menus[i].submenus[j].submenus.length; k++) {
              let l3Option = {
                name: jsonObj.menus[i].submenus[j].submenus[k].name,
                url: jsonObj.menus[i].submenus[j].submenus[k].actionUrl,
                trigger: null
              };
              l3.menuOptions.push(l3Option);
              if (k == jsonObj.menus[i].submenus[j].submenus.length - 1) {
                this.lowerLevels.push(l3);
              }
            }
          }
        }
      }
    }
    console.log(this.levelOne);
    console.log(this.lowerLevels);
  }
}

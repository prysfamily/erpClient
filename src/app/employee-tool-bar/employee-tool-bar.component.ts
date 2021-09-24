import { NavService } from './../nav.service';
import { Component, ElementRef, OnInit, ViewChild,ViewEncapsulation, AfterViewInit } from '@angular/core';
import {NavItem} from './../model/nav-items';
import { MatNavList } from '@angular/material/list';

@Component({
  selector: 'app-employee-tool-bar',
  templateUrl: './employee-tool-bar.component.html',
  styleUrls: ['./employee-tool-bar.component.scss']
})
export class EmployeeToolBarComponent implements OnInit {

  constructor(public navService : NavService) { }
  loginStatus = true;
  @ViewChild('appDrawer')
  appDrawer!: ElementRef;
  ngOnInit(): void {
    this.navService.appDrawer = this.appDrawer;
  }
  navItems: NavItem[] = [
    {
      displayName: 'ContactInformation',
      iconName: 'recent_actors',
      route: '/contactInformation',
      children: [
        {
          displayName: 'Speakers',
          iconName: 'group',
          route: 'devfestfl/speakers',
        }
      ]
    },
    {
      displayName: 'EmergencyContactInformation',
      iconName: 'recent_actors',
      route: '/emergencyContactInformation',
      children: []
    },
  ];

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}

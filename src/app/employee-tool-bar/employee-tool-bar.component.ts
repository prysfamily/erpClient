import { NavService } from './../nav.service';
import { Component, ElementRef, OnInit, ViewChild,ViewEncapsulation, AfterViewInit } from '@angular/core';
import {NavItem} from './../model/nav-items';
import { MatNavList } from '@angular/material/list';
import { DataService } from "../common-service.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-employee-tool-bar',
  templateUrl: './employee-tool-bar.component.html',
  styleUrls: ['./employee-tool-bar.component.scss']
})
export class EmployeeToolBarComponent implements OnInit {

  isLoggedIn!: Observable<boolean>;
  isAdminIn!: Observable<boolean>;
  isStaffIn!: Observable<boolean>;

  constructor(public navService : NavService, public ds: DataService) { 
    this.isLoggedIn! = ds.isLoggedIn();
    this.isAdminIn! = ds.isAdminIn();
    this.isStaffIn! = ds.isStaffIn();
    
  }
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

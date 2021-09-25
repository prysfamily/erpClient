import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavItem } from '../model/nav-items';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  constructor(public navService : NavService) { }
 
  @ViewChild('appDrawer')
  appDrawer!: ElementRef;
  ngOnInit(): void {
    this.navService.appDrawer = this.appDrawer;
  }
  navItems: NavItem[] = [
    {
      displayName: 'Contact Information',
      iconName: 'perm_phone_msg',
      route: '/contactInformation',
      children: [
        // {
        //   displayName: 'Speakers',
        //   iconName: 'group',
        //   route: 'devfestfl/speakers',
        // }
      ]
    },
    {
      displayName: 'Emergency Contact Information',
      iconName: 'call',
      route: '/emergencyContactInformation',
      children: []
    },
  ];

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

}

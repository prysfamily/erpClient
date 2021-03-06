import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavItem } from '../model/nav-items';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  constructor(public navService : NavService) { }
 
  @ViewChild('appDrawer')
  appDrawer!: ElementRef;
  ngOnInit(): void {
    this.navService.appDrawer = this.appDrawer;
   
  }
  attendanceCheckIn(): void{}
  attendanceCheckOut(): void{}
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

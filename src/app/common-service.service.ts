import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable  } from 'rxjs';
import { Router } from '@angular/router';
//import { Data } from '../entities/data';

@Injectable()
export class DataService {
 isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
 isAdmin = new BehaviorSubject<boolean>(false);
 isStaff = new BehaviorSubject<boolean>(false);
  
 private hasToken() : boolean {
    return !!localStorage.getItem('token');
  }
  Role : String  = "STAFF";
  //data = this.dataSource.asObservable();

  constructor(private router: Router) { }

 // updatedDataSelection(data: Data){
  //  this.dataSource.next(data);
 // }

  /**
   *
   * @returns {Observable<T>}
   */
   isLoggedIn() : Observable<boolean> {

    return this.isLoginSubject.asObservable();
  }

  /**
   *
   * @returns {Observable<T>}
   */
   isStaffIn() : Observable<boolean> {

    return this.isStaff.asObservable();
  }
  /**
   *
   * @returns {Observable<T>}
   */
   isAdminIn() : Observable<boolean> {

    return this.isAdmin.asObservable();
  }

  getRole () : String{
 return this.Role;
  }

  /**
   *  Login the user then tell all the subscribers about the new status
   */
  login(role : String) : void {

    if(role === 'ADMIN'){
        this.isAdmin.next(true);
    } else if(role === 'STAFF') {
        this.isStaff.next(true);
    }
    this.Role = role;

    localStorage.setItem('token', 'JWT');
    this.isLoginSubject.next(true);
  }

  /**
   * Log out the user then tell all the subscribers about the new status
   */
  logout() : void {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
    this.isStaff.next(false);
    this.isAdmin.next(false);
    this.router.navigate(['/login']);
  }

 
  
}

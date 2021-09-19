import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login(): void{
    this.router.navigate(['/leaveLedger']);
  }

}

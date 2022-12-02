import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }

  onClick(event :Event){
    event.preventDefault();
    // this.router.navigateByUrl('utility-dashboard');
    window.location.href = `http://localhost:4200/utility-dashboard`
  }

}

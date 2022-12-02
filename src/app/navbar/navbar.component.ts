import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  url!:any;
  flag:any = true;
  constructor(private route: ActivatedRoute,private router: Router) {
    
   }

  ngOnInit(): void {
    // this.url = this.router.url; 
    // if(this.url == '/' || this.url == 'login'){
    //   this.flag = false;
    // }
    // console.log(this.url)
  }

  onClick(val:any){
    // this.router.navigateByUrl(val);
    window.location.href = `http://localhost:4200/${val}`

  }

}

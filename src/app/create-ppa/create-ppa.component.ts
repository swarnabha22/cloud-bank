import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-create-ppa',
  templateUrl: './create-ppa.component.html',
  styleUrls: ['./create-ppa.component.scss']
})
export class CreatePpaComponent implements OnInit {

  constructor(public util: UtilityService) { }

  ngOnInit(): void {    
  }

}

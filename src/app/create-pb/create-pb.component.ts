import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-create-pb',
  templateUrl: './create-pb.component.html',
  styleUrls: ['./create-pb.component.scss']
})
export class CreatePbComponent implements OnInit {

  constructor(public util:UtilityService) { }

  ngOnInit(): void {
  }

}

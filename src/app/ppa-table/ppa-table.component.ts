import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';


@Component({
  selector: 'app-ppa-table',
  templateUrl: './ppa-table.component.html',
  styleUrls: ['./ppa-table.component.scss']
})
export class PpaTableComponent implements OnInit {

  genInExecution:any;
  completedGen:any;
  executionArray!:any[];
  completedReturned!:any[]
 

  constructor(private util:UtilityService) { }

  ngOnInit(): void {
    this.genInExecution=this.util.getGeneratorsInExcecution()
    this.completedGen = this.util.getExcecutionCompletedGenerators()
    this.executionArray = this.genInExecution.slice(0, 4);
    this.completedReturned =this.completedGen.slice(0,4);
  }
  showMoreInExecution(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.executionArray = this.genInExecution.slice(startItem, endItem);
  }
  showMore(event: PageChangedEvent){
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.completedReturned = this.genInExecution.slice(startItem, endItem);
    // console.log(this.completedReturned);
    
  }
}

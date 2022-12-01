import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-pb-form',
  templateUrl: './pb-form.component.html',
  styleUrls: ['./pb-form.component.scss']
})
export class PbFormComponent implements OnInit {
  solar!: number;
  wind!: number;
  bio!: number;
  availableCapacity!: number;
  chosenCapacity!: number;
  contractId: any = null;
  genQty: number = 0;
  chosenGenerator: any;
  newPbRequest: any;
  genInExecution!: any[];
  currentDate: string = "2022-11-29"
  endDate: string = "2023-12-31";
  capacity = {
    solar: '',
    wind: '',
    bio: ''
  }
  constructor(public util: UtilityService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.newPbRequest = this.fb.group({
      qtyOfPowebank: [''],
      validityOfPb: [''],
      costOfPb: ['']
    })
    this.genInExecution = this.util.getGeneratorsInExcecution();
    this.calculateCapacity();
  }

  submit(formRef:any) {
    let pbRequest = this.newPbRequest.value;
    pbRequest.chosenCapacity = this.chosenCapacity;
    let { qtyOfPowebank } = pbRequest;
    let pbOnCloud = this.util.listedOnCloud.getValue()
    this.util.listedOnCloud.next(pbOnCloud + qtyOfPowebank)
    let pbNotOnCloud = this.util.yetToListOnCloud.getValue()
    this.util.yetToListOnCloud.next(pbNotOnCloud - qtyOfPowebank)
    this.util.newPbSpecification.next(this.newPbRequest.value)
    this.capacity = {
      solar: '',
      wind: '',
      bio: ''
    }
    this.chosenCapacity = 0;//null
    formRef.reset();
  }
  calculateCapacity() {
    this.solar = this.getResourceQuantity('Solar Photovoltaic')
    this.wind = this.getResourceQuantity('Wind Generator')
    this.bio = this.getResourceQuantity('Bio-Gas Generator')
    this.availableCapacity = this.solar + this.wind + this.bio;
  }
  getResourceQuantity(type:any) {
    let qty = 0;
    for (const gen of this.genInExecution) {
      if (gen.generatingSource == type) {
        qty = qty + gen.quantity;
      }
    }
    return qty
  }
  chooseGenerator(e:any) {
    let keyword = e.target.value;
    this.chosenGenerator = this.genInExecution.find((gen) => gen.generatorName == keyword)
    this.contractId = this.chosenGenerator.contractId;
    this.genQty = this.chosenGenerator.quantity;
    this.capacity = {
      solar: '',
      wind: '',
      bio: ''
    }
    this.chosenCapacity = 0; //null
  }
  chooseCapacity(e:any) {
    this.chosenCapacity = e.target.value;
    let { generatingSource } = this.chosenGenerator;
    if (generatingSource == "Solar Photovoltaic") {
      this.capacity.solar = e.target.value;
    } else if (generatingSource == "Wind Generator") {
      this.capacity.wind = e.target.value;
    } else {
      this.capacity.bio = e.target.value;
    }
  }
}

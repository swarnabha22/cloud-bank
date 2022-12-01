import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  ppaRequest = new BehaviorSubject(null)
  listedOnCloud = new BehaviorSubject(34)
  yetToListOnCloud = new BehaviorSubject(267)
  newPpaRequest = new BehaviorSubject({
    generatorName: '',
    capacityRequested:''
  })
  newPbSpecification = new BehaviorSubject({
    contractId:'',
    qtyOfPowebank:'',
    chosenCapacity:''
  })

  availableGenerators:any[]=[
    {
      generatorName: "Generator 1",
      generatorCode: "ME50",
      generatingSource: "Solar Photovoltaic",
      generationCapacity: 680
    },
    {
      generatorName: "Generator 2",
      generatorCode: "ME68",
      generatingSource: "Wind Generator",
      generationCapacity: 300
    },
    {
      generatorName: "Generator 3",
      generatorCode: "ME88",
      generatingSource: "Solar Photovoltaic",
      generationCapacity: 750
    },
    {
      generatorName: "Generator 4",
      generatorCode: "ME94",
      generatingSource: "Bio-Gas Generator",
      generationCapacity: 600
    },
    {
      generatorName: "Generator 5",
      generatorCode: "ME89",
      generatingSource: "Bio-Gas Generator",
      generationCapacity: 550
    },
    {
      generatorName: "Generator 6",
      generatorCode: "ME79",
      generatingSource: "Solar Photovoltaic",
      generationCapacity: 525
    },
    {
      generatorName: "Generator 7",
      generatorCode: "ME118",
      generatingSource: "Wind Generator",
      generationCapacity: 400
    },
    {
      generatorName: "Generator 8",
      generatorCode: "ME129",
      generatingSource: "Solar Photovoltaic",
      generationCapacity: 380
    },
    {
      generatorName: "Generator 9",
      generatorCode: "ME110",
      generatingSource: "Solar Photovoltaic",
      generationCapacity: 420
    },
    {
      generatorName: "Generator 10",
      generatorCode: "ME185",
      generatingSource: "Wind Generator",
      generationCapacity: 290
    },
    {
      generatorName: "Generator 11",
      generatorCode: "ME165",
      generatingSource: "Bio-Gas Generator",
      generationCapacity: 375
    },
    {
      generatorName: "Generator 12",
      generatorCode: "ME157",
      generatingSource: "Solar Photovoltaic",
      generationCapacity: 645
    }
  ]

  inExcecutionGenerators:any[]=[
    {
      contractId: 1134,
      generatorName: "Generator 3",
      quantity: 750,
      generatingSource: "Solar Photovoltaic",
      timeline: "15 Nov 2022 to 29 Feb 2023"
    },
    {
      contractId: 1789,
      generatorName: "Generator 5",
      quantity: 550,
      generatingSource: "Bio-Gas Generator",
      timeline: "30 Nov 2022 to 16 Jan 2023"
    },
    {
      contractId: 1678,
      generatorName: "Generator 7",
      quantity: 400,
      generatingSource: "Wind Generator",
      timeline: "25 Oct 2022 to 31 dec 2022"
    },
    {
      contractId: 2087,
      generatorName: "Generator 1",
      quantity: 680,
      generatingSource: "Solar Photovoltaic",
      timeline: "18 Oct 2022 to 12 Jan 2023"
    },
    {
      contractId: 3902,
      generatorName: "Generator 4",
      quantity: 600,
      generatingSource: "Bio-Gas Generator",
      timeline: "18 Sep 2022 to 12 Dec 2022"
    },
    {
      contractId: 4127,
      generatorName: "Generator 9",
      quantity: 420,
      generatingSource: "Solar Photovoltaic",
      timeline: "19 Oct 2022 to 21 Feb 2023"
    },
    {
      contractId: 5289,
      generatorName: "Generator 10",
      quantity: 290,
      generatingSource: "Wind Generator",
      timeline: "21 Nov 2022 to 17 Mar 2023"
    }
  ]

  excecutionCompletedGenerators:any[]=[
    {
      contractId: 784,
      generatorName: "Generator 11",
      quantity: 450,
      generationSource: "Bio-Gas Generator",
      timeline: "12 April 2022 to 05 Sep 2022"
    },
    {
      contractId: 932,
      generatorName: "Generator 2",
      quantity: 380,
      generationSource: "Wind Generator",
      timeline: "13 Feb 2022 to 31 July 2022"
    },
    {
      contractId: 845,
      generatorName: "Generator 12",
      quantity: 255,
      generationSource: "Solar Photovoltaic",
      timeline: "3 May 2022 to 19 Sep 2022"
    },
    {
      contractId: 1045,
      generatorName: "Geneartor 2",
      quantity: 890,
      generationSource: "Wind Generator",
      timeline: "30 Aug 2022 to 29 Oct 2022"
    },
    {
      contractId: 1089,
      generatorName: "Generator 6",
      quantity: 485,
      generationSource: "Solar Photovoltaic",
      timeline: "11 June 2022 to 18 Oct 2022"
    },
    {
      contractId: 1121,
      generatorName: "Geneartor 8",
      quantity: 285,
      generationSource: "Solar Photovoltaic",
      timeline: "07 April 2022 to 30 Aug 2022"
    },
    {
      contractId: 1130,
      generatorName: "Generator 5",
      quantity: 735,
      generationSource: "Bio-Gas Generator",
      timeline: "18 Feb 2022 to 18 July 2022"
    }
  ]

  typeOfResources:any[]=["Solar Photovoltaic","Wind Generator","Bio-Gas Generator"]

  constructor() { }

  getLastPpaRequest(){
    return this.ppaRequest;
  }

  getAvailableGenerators(){
    return this.availableGenerators;
  }

  getGeneratorsInExcecution(){
    return this.inExcecutionGenerators;
  }

  getExcecutionCompletedGenerators(){
    return this.excecutionCompletedGenerators
  }
  getTypeOfResources(){
    return this.typeOfResources
  }
}

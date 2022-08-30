import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plumbing',
  templateUrl: './plumbing.component.html',
  styleUrls: ['./plumbing.component.css']
})
export class PlumbingComponent implements OnInit {

  constructor() { }
list1=[
'Apartment complexes',
'Condominiums',
'Offices, small business & commercial buildings',
'Old buildings, heritage & protected buildings',
'Schools, colleges & universities',
'Restaurants and food service',
'Retail, grocery and convenience stores',
'Malls',
'Health facilities, hospitals',
'Retirement and assisted living facilities'
]

pipesList=[
  {name:'Copper pipes', img:'../../../assets/plumbing/copper-pipes.jpg'},
  {name:'Galvanized steel pipes', img:'../../../assets/plumbing/steel-pipes.jpg'},
  {name:'Polyvinyl chloride (PVC) pipe', img:'../../../assets/plumbing/pvc-pipes.jpg'},
  {name:'Chlorinated polyvinyl chloride (CPVC) pipess', img:'../../../assets/plumbing/cpvc-pipes.jpg'},
  {name:'Cross-linked polyethylene (PEX) pipes', img:'../../../assets/plumbing/pex-pipes.jpg'},
]
  ngOnInit(): void {
  }

}

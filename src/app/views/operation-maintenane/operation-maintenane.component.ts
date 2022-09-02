import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation-maintenane',
  templateUrl: './operation-maintenane.component.html',
  styleUrls: ['./operation-maintenane.component.css']
})
export class OperationMaintenaneComponent implements OnInit {

  array1=[
    {title:'Experienced Team', icon:'bi-people-fill'},
    {title:'Reliable & Affordable ', icon:'bi-universal-access'},
    {title:'Advanced Technology', icon:'bi-gear-fill'},
    {title:'Systematic service', icon:' bi-robot'},
    {title:'Quick service Delivery', icon:'bi-speedometer'},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}

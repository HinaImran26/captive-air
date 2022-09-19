import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-installation-services',
  templateUrl: './installation-services.component.html',
  styleUrls: ['./installation-services.component.css']
})
export class InstallationServicesComponent implements OnInit {

  array1=[{title:'HVAC Ducting', link:'#ducting'},
  {title:'Plumbing', link:'#plumbing'},
  {title:'Fire Fighting', link:'#fire-fight'},
  {title:'Operational Maintenance', link:'#op-main'},
  {title:'Exclusive Services', link:'#ex-services'},]

  constructor() { }

  ngOnInit(): void {
  }

}

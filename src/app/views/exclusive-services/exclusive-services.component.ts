import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exclusive-services',
  templateUrl: './exclusive-services.component.html',
  styleUrls: ['./exclusive-services.component.css']
})
export class ExclusiveServicesComponent implements OnInit {


  array1=[
    {title:'Energy Efficiency Testing of HVAC Systems', desc:'To make sure your energy usage is as low as possible without hindering maximum occupant comfort. '},
    {title:'Acoustical and Airflow Testing', desc:'To determine whether your HVAC system is performing optimally'},
    {title:'Air Cleaner Testing', desc:'To keep indoor air quality ideal and to evaluate the effectiveness of system'},
    {title:'Detailed Inspection Reports', desc:'To provide a detailed written audit of system performance, listing of recommendations for repairs and replacements.'},
    ]

  constructor() { }

  ngOnInit(): void {
  }

}

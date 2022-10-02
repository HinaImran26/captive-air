import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  array1 = [
    { title: 'Power Plants/ Oil & Gas', img: '../../../assets/images/closeup-view-cylindrical-grinder-industrial-concept.jpg' },
    { title: 'Business & Commercial Buildings', img: '../../../assets/images/closeup-view-cylindrical-grinder-industrial-concept.jpg' },
    { title: 'Manufacturing Setup', img: '../../../assets/images/closeup-view-cylindrical-grinder-industrial-concept.jpg' },
    { title: 'Data Centers', img: '../../../assets/images/closeup-view-cylindrical-grinder-industrial-concept.jpg' },
    { title: 'Food & Beverages', img: '../../../assets/images/closeup-view-cylindrical-grinder-industrial-concept.jpg' },
    { title: 'Hospitals', img: '../../../assets/images/closeup-view-cylindrical-grinder-industrial-concept.jpg' },
    { title: 'Pharmaceuticals', img: '../../../assets/images/closeup-view-cylindrical-grinder-industrial-concept.jpg' },
    { title: 'Educational Buildings', img: '../../../assets/images/closeup-view-cylindrical-grinder-industrial-concept.jpg' }
  ]

  powerPlants = [
    'MAN ATLAS POWER PLANT (211 MW) ',
    'BALLOKI / ORIENT POWER PLANT (225 MW) ',
    'SAPPHIRE POWER PLANT / MURIDKE (225 MW)',
    'HUBCO POWER PLANT (211 MW)',
    'MAKORI OIL FIELD ',
    'SAWAN GAS FIELD (2700 TR) ',
    'PARCO OIL FIELD (1000 TR) '
  ]

  business = [
    'HYPER STAR LAHORE (1350 TR) ',
    'ICI Morinaga Plant Sheikhupura ',
    'TRICON CORPORATE TOWER LAHORE (2400 TR) ',
    'DOLMEN CITY HYPER STAR (600 TR) ',
    'NISHAT BOTIQUE HOTEL LAHORE (200 TR) ',
    'BANK ALFALAH HEAD OFFICE KARACHI (1100 TR)',
    'CHENONE TOWER MULTAN',
    'PARKLANE TOWER LAHORE',
    'HYPERSTAR WORLD TRADE CENTER ISLAMABAD',
    'ISLAMABAD CLUB',
    'MCB LAHORE'
  ]






  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  array1 = [
    {
      title: 'Power Plants/ Oil & Gas', img: '../../../assets/images/closeup-view-cylindrical-grinder-industrial-concept.jpg',
      data: ['MAN ATLAS POWER PLANT (211 MW)',
        'BALLOKI / ORIENT POWER PLANT (225 MW) ',
        'SAPPHIRE POWER PLANT / MURIDKE (225 MW)',
        'HUBCO POWER PLANT (211 MW)',
        'MAKORI OIL FIELD ',
        'SAWAN GAS FIELD (2700 TR) ',
        'PARCO OIL FIELD (1000 TR) ']
    },
    {
      title: 'Business & Commercial Buildings', img: '../../../assets/images/closeup-view-cylindrical-grinder-industrial-concept.jpg',
      data: ['HYPER STAR LAHORE (1350 TR) ',
        'ICI Morinaga Plant Sheikhupura ',
        'TRICON CORPORATE TOWER LAHORE (2400 TR) ',
        'DOLMEN CITY HYPER STAR (600 TR) ',
        'NISHAT BOTIQUE HOTEL LAHORE (200 TR) ',
        'BANK ALFALAH HEAD OFFICE KARACHI (1100 TR)',
        'CHENONE TOWER MULTAN',
        'PARKLANE TOWER LAHORE',
        'HYPERSTAR WORLD TRADE CENTER ISLAMABAD',
        'ISLAMABAD CLUB',
        'MCB LAHORE']
    },
    {
      title: 'Manufacturing Setup', img: '../../../assets/images/closeup-view-cylindrical-grinder-industrial-concept.jpg',
      data: ['NISHAT MILLS LIMITED (2000 TR) APPAREL UNIT-I & APPAREL UNIT-2',
        'HIRA TERRY MILLS LAHORE (650 TR)',
        'SOORTY GREEN FACTORY KARACHI (2100 TR)',
        'DG CEMENT KALAKAHAR (450 TR)',
        'NISHAT PAPER KHAIRPUR PLANT',
        'TIAGA APPAREL LIMITED (500 TR)',
        'ATLAS HONDA SHEIKHUPURA (1350 TR)',
        'US DENIM LAHORE',
        ' CRESCENT TEXTILE HATTAR, FAISALABAD']
    },
    {
      title: 'Data Centers', img: '../../../assets/images/closeup-view-cylindrical-grinder-industrial-concept.jpg',
      data: ['SHAHBAZ AIR BASE JACOBABAD (2700 TR)',
        'DEUTSCHE BANK LAHORE',
        'CINEPAX CINEMA PACKAGES MALL LAHORE (300 TR)',
        'EXPRESS NEWS LAHORE']
    },
    {
      title: 'Food & Beverages', img: '../../../assets/images/closeup-view-cylindrical-grinder-industrial-concept.jpg',
      data: ['McDONALDS PAKISTAN (Lahore , Gujranwala , Gujrat, Jehlum, Sahiwal, BahriaTown , Multan ,DHA Islamabad, Bhera)',
        'PEPSICO SUNDAR LAHORE',
        'UNILIVER PAKISTAN WALLS FACTORY',
        'PEPSICO  HATTAR',
        'COCA COLA BEVERAGES RAIWINID ROAD LAHORE',
        'COCA COLA CONCENTRATE PLANT LAHORE (250 TR)',
        'ENGRO FOODS FACTORY SAHIWAL (450 TR)']
    },
    {
      title: 'Hospitals', img: '../../../assets/images/closeup-view-cylindrical-grinder-industrial-concept.jpg',
      data: [' SHAUKAT KHANUM CANCER MEMORIAL HOSPITAL (LAHORE , KARACHI & PESHAWAR)',
        'SHARIF MEDICAL AND DENTAL COLLEGE LAHORE',
        'BAHAWALPUR HOSPITAL (1500 TR)',
        'CHILDREN HOSPITAL LAHORE',
        'BSL-3 LABS (LAHORE, FAISLABAD AGRICULTURE UNIVERSITY)']
    },
    {
      title: 'Pharmaceuticals', img: '../../../assets/images/closeup-view-cylindrical-grinder-industrial-concept.jpg',
      data: ['AMSON VACCINES ISLAMABAD',
        'ABBOT LABORATOREIS KARACHI',
        'HIGHNOON LABORATORIES LAHORE',
        'RECKIT BENCKISER KARACHI',
        'BAYER / MEDIPHARM LAHORE & KARACHI',
        'GLAXOSMITHKLINE LAHORE',
        'GETZ PHARMA KARACHI ',
        'PFIZER KARACHI',
        'PHARMAGEN',
        'LEEDS PHARMACEUTICALS ISLAMABAD',
        'BIOCEF PHARMACEUTICALS LAHORE',
        'STAR LABORATORIES LAHORE',
        'PHARMEDIC LAHORE ',
        'GLOBAL PHARMA ISLAMBAD']
    },
    {
      title: 'Educational Buildings', img: '../../../assets/images/closeup-view-cylindrical-grinder-industrial-concept.jpg',
      data: ['FC COLLEGE BUSINESS & SCIENCE BUILDING (1800 TR) ',
        'NUST ISLAMABAD',
        'GIFT UNIVERSITY GUJRANWALA',
        'VIRTUAL UNIVERSITY RAIWIND LAHORE']
    }
  ]


  ngOnInit(): void {

  }

}









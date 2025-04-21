import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-fresh-air-treatment',
  templateUrl: './fresh-air-treatment.component.html',
  styleUrls: ['./fresh-air-treatment.component.css']
})
export class FreshAirTreatmentComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) { }
  images: any[] = [
    "../../../assets/fresh air/img1.jpg",
    "../../../assets/fresh air/img2.jpg",
    "../../../assets/fresh air/img3.jpg",
    "../../../assets/fresh air/img4.jpg",
    "../../../assets/fresh air/img5.jpg",
    "../../../assets/fresh air/img6.jpg",
  ]


  slider2 = [
    "../../../assets/fresh air/IMG1.png",
    "../../../assets/fresh air/IMG2.png",
    "../../../assets/fresh air/IMG4.png",
    "../../../assets/fresh air/IMG5.png",
    "../../../assets/fresh air/IMG6.png",
    "../../../assets/fresh air/IMG7.png",
    "../../../assets/fresh air/IMG8.png",
    "../../../assets/fresh air/IMG9.png",
  ]

  bryProducts = [
    'Desiccant Dehumidiﬁers',
    'Energy Recovery Wheels',
    'Energy Recovery Ventilators',
    'Product Drying',
    'Dedicated Out Door Air Systems',
    'Gas phase ﬁltration systems'
  ]


  FLSeries = [
    'High Efficiency and Reliability',
    'Superior design',
    'Ease of installation',
    'Ease of operation and maintenance',
    'Customization options available',
  ]

  FLAdv = [
    'Adsorbent, non-toxic, non-flammable, fully water washable',
    'In-situ synthesized metal silicate desiccant on an inert inorganic fiber substrate',
    'Active desiccant 80% of the media weight, so as to ensure high performance and minimal heat carry-over',
    'Rotor is non-flammable. The net organics in the honeycomb media less than 2%',
    'Special edge hardened media surface to ensure a smooth surface and long life of both, media and the seal contacting it',
    'Rotor perimeter flange extend media and seal life'
  ]


  compactAdv = [
    'Compact',
    'Lightweight with small footprint',
    'Lowest volume/ weight per CMH',
    'Incorporates high performance fluted metal silicate desiccant synthesized rotor',
    'Stainless steel construction (optional)',
    'Place it anywhere – indoor/outdoor including mounting',
    // 'Largest capacity range in Compact Dehumidifiers – 170 CMH to 3000 CMH'
  ]

  industrialApps = [
    ' Pharmaceuticals, food processing, electronics, defence, turbine, leather',
    'Laboratories, spices, seed, tea/ coffee, dairy, safety glass',
    'Archives & museum, investment casting, electrodes and corrosion prevention worldwide'
  ]

  ecoFreshAdv = [
    'Pre-conditions incoming fresh air.',
    'Easily integrated/retrofitted into new/existing ventilation systems.',
    'Delivers fresh air throughout the year at conditions very near inside conditions.',
    'Helps to meet ventilation standard without raising energy cost.',
    'Maintains humidity conditions at no additional cost.',
    'Allows reduction in system capacity by 30 to 65%.'

  ]

  energyVents = [
    ' Residential: Apartment Complexes, Homes, Luxury Villas ',
    ' Light commercial: Showrooms, Gyms, Beauty Saloons, Cafeterias',
    ' Commercial: Cabins, Conference rooms, Institutions, Labs, Specialty Clinics',
    ' Offices, Auditoriums & other air conditioned environment for human comfort'

  ]


  ethyAdv = [
    'Energy saving because of very low pressure drop',
    'Low footprint',
    'Filter Cassettes can be replaced with ease without any expertise',
    'Robust CNC fabricated construction',
    'Kills bacteria, pathogens and viruses from air'

  ]
  ngOnInit(): void {
    this.addTags();
    this.title.setTitle("Fresh Air Treatment Solutions");
  }

  addTags() {
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Experience the best fresh air treatment solutions by Captive Air'
      },
    )
  }


}

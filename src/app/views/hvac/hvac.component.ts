import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-hvac',
  templateUrl: './hvac.component.html',
  styleUrls: ['./hvac.component.css']
})
export class HvacComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private meta: Meta) { }

  RhossArray=[
    '../../../assets/images/Rhoss/Rhoss1.png',
    '../../../assets/images/Rhoss/Rhoss2.png',
    '../../../assets/images/Rhoss/Rhoss3.png',
    '../../../assets/images/Rhoss/Rhoss4.png',
    '../../../assets/images/Rhoss/Rhoss5.png',
    '../../../assets/images/Rhoss/Rhoss6.png',
    '../../../assets/images/Rhoss/Rhoss7.png',
    '../../../assets/images/Rhoss/Rhoss8.png',
  ]

  BushArray=[
    '../../../assets/images/Bush/bush1.png',
    '../../../assets/images/Bush/bush2.png',
    '../../../assets/images/Bush/bush3.png',
    '../../../assets/images/Bush/bush4.png',
    '../../../assets/images/Bush/bush5.png',
    '../../../assets/images/Bush/bush6.png',
  ]

  technairArray=[
    '../../../assets/images/technair/tech1.png'
  ]

  kingsunArray=[
    '../../../assets/images/kingsun/kingsun1.png',
    '../../../assets/images/kingsun/kingsun2.png',
    '../../../assets/images/kingsun/kingsun3.png',
    '../../../assets/images/kingsun/kingsun4.png',

  ]

  haltonArray=[
    '../../../assets/images/halton/halton1.png',
    '../../../assets/images/halton/halton2.jpg',
    '../../../assets/images/halton/halton3.jpg',

  ]

    auxArray=[
    '../../../assets/images/auxx/aux1.png',
    '../../../assets/images/auxx/aux2.png',
    '../../../assets/images/auxx/aux3.png',
    '../../../assets/images/auxx/aux4.png',
    '../../../assets/images/auxx/aux5.png',
  ]



  ngOnInit(): void {
    // if (!localStorage.getItem("hasRefreshed"))
    //   setTimeout(() => {
    //     window.location.reload();
    //     localStorage.setItem("hasRefreshed", "true");
    //   }, 500);
    this.addTags();

  }
  ngOnDestroy(): void {
    // localStorage.removeItem("hasRefreshed")
  }

  navigate(site: any) {
    if (site === 'rhoss')
      window.open("https://www.rhoss.it/the-group/", "_blank");
      if (site === 'bush')
      window.open("https://dunham-bush.com/our-products/", "_blank");
      if (site === 'aux')
      window.open("https://www.auxcac.cn", "_blank");
      if (site === 'halton')
      window.open(" https://www.halton.com", "_blank");
      if (site === 'kingsun')
      window.open("https://kingsunct.com/en/products", "_blank");
      if (site === 'technair')
      window.open("https://www.tecnairlv.it/", "_blank");
  }
  
  addTags() {
    this.meta.addTags([
      { name: 'description', content: 'Captive Air provides innovative services related to heating, ventilation, air conditioning systems & other engineering solutions' },
      { property: 'og:title', content: 'HVAC Engineering | Captive Air' },
      { name: 'keywords', content: 'hvac,air conditioning system' },
    ])
  }
}


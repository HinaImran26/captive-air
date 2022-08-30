import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hvac-ducting',
  templateUrl: './hvac-ducting.component.html',
  styleUrls: ['./hvac-ducting.component.css']
})
export class HvacDuctingComponent implements OnInit {
  array2=[{product:'Sheet Metal Air Ducts', img:'../../../assets/hvac-ducting/temp-card-img.jpg', desc:' These are galvanized steel or aluminum made ducts and are the most common type of rigid air duct made of. These are the most durable type of air duct construction as it has got non-porous surface and are the least likely to have mold or any sort of biological growth.'},
  {product:'Fiberglass Lined Air Ducts', img:'../../../assets/hvac-ducting/temp-card-img.jpg', desc:'Sheet metal air ducts that are lined with an external or internal fiberglass duct liner are one of the most preferred types of AC ducts. As the fiberglass lining used to insulate air ducts, help from heat loss and also avoid condensation in cases where the supply air is very cold, these types are highly recommended in systems where continual usage happens. Fiberglass lining also reducing the noise of the HVAC system while they are in operation and are very common in office and commercial buildings.'},
  {product:'Flexible Air Ducts', img:'../../../assets/hvac-ducting/temp-card-img.jpg', desc:'Flexible air ducts are the types made using steel wire helix and usually come as encapsulated in a 2-ply, polymer plastic. These type of duct is inexpensive and lightweight in nature. This type of duct is highly suitable in tricky spaces where rigid ducts are difficult to install. Flexible ducts are known for the good air quality and resistance to mold and other biological growth.'}
  ]

  featuredEquip=['Computer Controlled Duct Fabrication Machine',
    'Transverse Flanged Duct Machine',
   ' Computer Controlled Sheet Cutting Machine' ,
   ' Duct Former & Lock Former Machine',
    'Computer Controlled Bender Machine '
    ]

    images=['../../../assets/hvac-ducting/m-1.jpg','../../../assets/hvac-ducting/m-2.jpg']

  constructor() { }

  ngOnInit(): void {
  }

}

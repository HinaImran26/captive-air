import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hvac-ducting',
  templateUrl: './hvac-ducting.component.html',
  styleUrls: ['./hvac-ducting.component.css']
})
export class HvacDuctingComponent implements OnInit {
  array2 = [{ product: 'Sheet Metal Air Ducts', img: '../../../assets/hvac-ducting/temp-card-img.jpg', desc: ' These are galvanized steel or aluminum made ducts and are the most common type of rigid air duct made of. These are the most durable type of air duct construction as it has got non-porous surface and are the least likely to have mold or any sort of biological growth.' },
  { product: 'Fiberglass Lined Air Ducts', img: '../../../assets/hvac-ducting/temp-card-img.jpg', desc: 'Sheet metal air ducts that are lined with an external or internal fiberglass duct liner are one of the most preferred types of AC ducts. As the fiberglass lining used to insulate air ducts, help from heat loss and also avoid condensation in cases where the supply air is very cold, these types are highly recommended in systems where continual usage happens. Fiberglass lining also reducing the noise of the HVAC system while they are in operation and are very common in office and commercial buildings.' },
  { product: 'Flexible Air Ducts', img: '../../../assets/hvac-ducting/temp-card-img.jpg', desc: 'Flexible air ducts are the types made using steel wire helix and usually come as encapsulated in a 2-ply, polymer plastic. These type of duct is inexpensive and lightweight in nature. This type of duct is highly suitable in tricky spaces where rigid ducts are difficult to install. Flexible ducts are known for the good air quality and resistance to mold and other biological growth.' }
  ]

  featuredEquip = ['Computer Controlled Duct Fabrication Machine',
    'Transverse Flanged Duct Machine',
    ' Computer Controlled Sheet Cutting Machine',
    ' Duct Former & Lock Former Machine',
    'Computer Controlled Bender Machine '
  ]

  images = ['../../../assets/hvac-ducting/m-1.jpg', '../../../assets/hvac-ducting/m-2.jpg']

  solutionsArray = [{ title: 'Standard', desc: '100% waterproof polyester fabric with acrylic coating' },
  { title: 'Class 1/B s1 d0', desc: '100% waterproof polyester fabric with flame-resistant polyurethane coating' },
  { title: 'Class 0/A1', desc: 'Waterproof fiberglass fabric with flame-resistant polyurethane/silicone coating. The class 1 approved fabric is OEKO TEX 100 Standard certified, confirms that all the fabrics used have not received treatments harmful to peoples health and that the dyes used for dyeing are non- toxic.An additional antibacterial treatment can be applied to the fabric in class 1 for installations in clean rooms or in establishments of the agri - food industry.Laser cutting of the holes cancels the release of volatile particles from the fabric during the operation of the diffuser making the product completely safe for this use.'},
  ]


  featuresArray = [{ title: 'Lightness', desc: 'The weight of our fabrics varies from 100-480 g / sqm, depending on the type and class of reaction to fire. This means that extremely light loads weigh on the structure of the building, making these channels suitable for any application.' },
  { title: 'Easy installation', desc: 'The exclusive and simple installation systems of our diffusers, combined with the extreme lightness of the fabric, allow to reduce installation times and therefore the cost of labor' },
  { title: 'Simplified maintenance', desc: 'Textile diffusers are easy to wash, clean and sanitize when necessary, with the possibility of carrying out planned maintenance at certain costs.'},
  ]

constructor() { }

ngOnInit(): void {
}

}

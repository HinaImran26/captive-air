import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fire-protection',
  templateUrl: './fire-protection.component.html',
  styleUrls: ['./fire-protection.component.css']
})
export class FireProtectionComponent implements OnInit {

array1=[{title:'Next Generation Sustainable Fire Suppression', product:'Streamex', img:'../../../assets/fire-protection/streamex.jpg', desc:'The first internationally recognised FK-5-1-12 fire suppression system in Malaysia, STREAMEX offers complete protection for all the things that matter most. SRI is the only Malaysian brand to offer a UL listed and FM approved FK-5-1-12 gaseous suppression system in larger cylinder sizes and higher pressure options, providing a cost efficient yet effective solution'},
{title:'Ultimate Protection against Catastrophe', product:'SR200', img:'../../../assets/fire-protection/sr200.jpg', desc:'With a wide range of approvals, our SR-200 is suitable for Class A, B and C fires and provides a highly efficient and reliable solution to protecting high value assets, be it data servers, people or equipment.'},
{title:'Safe, Effective & Environment Friendly', product:'Inertec', img:'../../../assets/fire-protection/inertec.jpg', desc:'Inertec is SRI’s internationally accredited, environmentally friendly fire protection solution which uses inert gases as an extinguishing agent.SRI’s internationally accredited, environmentally friendly fire protection solution which uses inert gases as an extinguishing agent.'}
]

array2=[{product:'Kitchenshield', img:'../../../assets/fire-protection/kitchenshield.jpg', desc:'An automated fire extinguishing system for commercial kitchens that is designed to quickly detect and extinguish fires with an environmentally friendly extinguishing agent which is more than 99% biodegradable.'},
{product:'Firetec', img:'../../../assets/fire-protection/firetech.jpg', desc:'SRI’s compact, automatic and effective fire detection and extinguishing system. The efficacy of FireTec comes from it’s polymer tubing which ruptures when exposed to flames.'},
{product:'CO2 Systems', img:'../../../assets/fire-protection/inertec.jpg', desc:'Our most cost-efficient system is a versatile solution that can be installed either for total flooding or local applications.'}
]

images:any[]=[
  // "../../../assets/fire-protection/standart-1.png",
  "../../../assets/fire-protection/standart-2.png",
  ".../../../assets/fire-protection/standart-3.png",
  "../../../assets/fire-protection/standart-4.png",
  "../../../assets/fire-protection/standart-5.png",
  "../../../assets/fire-protection/standart-6.png",
]
  constructor() { }

  ngOnInit(): void {
  }

}

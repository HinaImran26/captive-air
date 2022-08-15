import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hvac-bush-products',
  templateUrl: './hvac-bush-products.component.html',
  styleUrls: ['./hvac-bush-products.component.css']
})
export class HvacBushProductsComponent implements OnInit {

images:any[]=[
  "../../../assets/images/Bush/bush1.jpg",
  "../../../assets/images/Bush/bush2.jpg",
  "../../../assets/images/Bush/bush3.jpg",
  "../../../assets/images/Bush/bush4.jpg",
  "../../../assets/images/Bush/bush5.jpg",
  "../../../assets/images/Bush/bush6.jpg",
]


  constructor() { }

  ngOnInit(): void {
  }

}

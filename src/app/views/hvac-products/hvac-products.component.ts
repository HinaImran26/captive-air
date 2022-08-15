import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hvac-products',
  templateUrl: './hvac-products.component.html',
  styleUrls: ['./hvac-products.component.css']
})
export class HvacProductsComponent implements OnInit {

  constructor() { }

  images:any[]=[
    "../../../assets/images/Rhoss/Rhoss1.jpg",
    "../../../assets/images/Rhoss/Rhoss2.jpg",
    "../../../assets/images/Rhoss/Rhoss3.jpg",
    "../../../assets/images/Rhoss/Rhoss4.jpg",
    "../../../assets/images/Rhoss/Rhoss5.jpg",
    "../../../assets/images/Rhoss/Rhoss6.jpg",
    "../../../assets/images/Rhoss/Rhoss7.jpg",
  ]

  ngOnInit(): void {
  }
}

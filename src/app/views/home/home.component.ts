import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images:any[]=[
    "../../../assets/client-logos/Asset1.png",
    "../../../assets/client-logos/Asset3.png",
    "../../../assets/client-logos/Asset4.png",
    "../../../assets/client-logos/Asset5.png",
    "../../../assets/client-logos/Asset6.png",
    "../../../assets/client-logos/Asset7.png",
    "../../../assets/client-logos/Asset8.png",
    "../../../assets/client-logos/Asset9.png",
    "../../../assets/client-logos/Asset10.png",
    "../../../assets/client-logos/Asset11.png",
    "../../../assets/client-logos/Asset12.png",
    "../../../assets/client-logos/Asset13.png",
    "../../../assets/client-logos/Asset14.png",
    "../../../assets/client-logos/Asset15.png",
    "../../../assets/client-logos/Asset16.png",

  ]


  sectors=[
    {title:'Commercial buildings', icon:'bi-building'},
    {title:'Oil & Gas', icon:'bi-fuel-pump'},
    {title:'Power Plants', icon:'bi-lightning'},
    {title:'Hotels & Resorts', icon:'bi-shop'},
    {title:'Multinational food chains', icon:'bi-cup-hot'},
    {title:'Textile & Automobile', icon:'bi-car-front'},
    {title:'Hospitals & Pharmaceuticals', icon:'bi bi-hospital'},
    {title:'Education', icon:'bi-mortarboard'},
  ]


  array1=[{title:'Enhancing customer experience', desc:'Listening our customers is a top priority'},
  {title:'Driving values to customer', desc:'Technological features, brand awareness, and customer satisfaction'},
  {title:'Delivering best in class performance', desc:'Offering superior product of higher quality'},
  {title:'Innovating sustainable solutions', desc:'Offering economically sound and environmentally healthy solutions that preserve the long term well-being of customers and the environment'},
]

  constructor() { }

  ngOnInit(): void {
   
  }

}

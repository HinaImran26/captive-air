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

  constructor() { }

  ngOnInit(): void {
  //  let vid= document.getElementById('vid1');

   
  }

}

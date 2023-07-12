import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: any[] = [
    "../../../assets/client-logos/Logos1.png",
    "../../../assets/client-logos/Logos2.png",
    "../../../assets/client-logos/Logos4.png",
    "../../../assets/client-logos/Logos5.png",
    "../../../assets/client-logos/Logos6.png",
    "../../../assets/client-logos/Logos7.png",
    "../../../assets/client-logos/Logos8.png",
    "../../../assets/client-logos/Logos9.png",
    "../../../assets/client-logos/Logos11.png",
    "../../../assets/client-logos/Logos12.png",
    "../../../assets/client-logos/Logos13.png",
    "../../../assets/client-logos/Logos14.png",
    "../../../assets/client-logos/Logos15.png",
    "../../../assets/client-logos/Logos16.png",
    "../../../assets/client-logos/Logos17.png",
    "../../../assets/client-logos/Logos18.png",
    "../../../assets/client-logos/Logos19.png",
    "../../../assets/client-logos/Logos20.png",
    "../../../assets/client-logos/Logos21.png",
    "../../../assets/client-logos/Logos22.png",
    "../../../assets/client-logos/Logos23.png",
    "../../../assets/client-logos/Logos24.png",
    "../../../assets/client-logos/Logos25.png",
    "../../../assets/client-logos/Logos26.png",
    "../../../assets/client-logos/Logos27.png",
    "../../../assets/client-logos/Logos28.png",
    "../../../assets/client-logos/Logos29.png",
    "../../../assets/client-logos/Logos30.png",
    "../../../assets/client-logos/Logos31.png",
    "../../../assets/client-logos/Logos32.png",
    "../../../assets/client-logos/Logos33.png",
    "../../../assets/client-logos/Logos34.png",
    "../../../assets/client-logos/Logos35.png",
    "../../../assets/client-logos/Logos36.png",
    "../../../assets/client-logos/Logos37.png",
    "../../../assets/client-logos/Logos38.png",
    "../../../assets/client-logos/Logos39.png",
    "../../../assets/client-logos/Logos40.png",
    "../../../assets/client-logos/Logos41.png",
    "../../../assets/client-logos/Logos42.png",
    "../../../assets/client-logos/Logos43.png",
    "../../../assets/client-logos/Logos44.png",
    "../../../assets/client-logos/Logos45.png",
    "../../../assets/client-logos/Logos46.png",
    "../../../assets/client-logos/Logos47.png",
    "../../../assets/client-logos/Logos48.png",
    "../../../assets/client-logos/Logos49.png",
    "../../../assets/client-logos/Logos50.png",
    "../../../assets/client-logos/Logos51.png",
    "../../../assets/client-logos/Logos52.png",
    "../../../assets/client-logos/Logos53.png",
    "../../../assets/client-logos/Logos54.png",
    "../../../assets/client-logos/Logos55.png",
    "../../../assets/client-logos/Logos56.png",
      // "../../../assets/client-logos/Logos10.png",
  ]


  sectors = [
    { title: 'Commercial buildings', icon: 'bi-building' },
    { title: 'Oil & Gas', icon: 'bi-fuel-pump' },
    { title: 'Power Plants', icon: 'bi-lightning' },
    { title: 'Hotels & Resorts', icon: 'bi-shop' },
    { title: 'Multinational food chains', icon: 'bi-cup-hot' },
    { title: 'Textile & Automobile', icon: 'bi-car-front' },
    { title: 'Hospitals & Pharmaceuticals', icon: 'bi bi-hospital' },
    { title: 'Education', icon: 'bi-mortarboard' },
  ]


  array1 = [{ title: 'Enhancing customer experience', desc: 'Listening our customers is a top priority' },
  { title: 'Driving values to customer', desc: 'Technological features, brand awareness, and customer satisfaction' },
  { title: 'Delivering best in class performance', desc: 'Offering superior product of higher quality' },
  { title: 'Innovating sustainable solutions', desc: 'Offering economically sound and environmentally healthy solutions that preserve the long term well-being of customers and the environment' },
  ]

  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void { 
    this.addTags();
    this.title.setTitle("Captive Air: World Class Engineering Specialist Company");
  }

  addTags() {
    this.meta.updateTag(
      { name: 'description', content: 'Captive Air is a dedicated engineering services company, dealing in installation of HVAC, Industrial Dehumidiﬁcation, Fireﬁghting & Plumbing systems.' },
    )
  }

}

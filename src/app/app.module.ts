import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { RouterOutlet } from '@angular/router';
import { LeadershipComponent } from './views/leadership/leadership.component';
import { OperationalexcellenceComponent } from './views/operationalexcellence/operationalexcellence.component';
import { ValuesComponent } from './views/values/values.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HvacComponent } from './views/hvac/hvac.component';
import { HvacProductsComponent } from './views/hvac-products/hvac-products.component';
import { HvacBushProductsComponent } from './views/hvac-bush-products/hvac-bush-products.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { FreshAirTreatmentComponent } from './views/fresh-air-treatment/fresh-air-treatment.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    LeadershipComponent,
    OperationalexcellenceComponent,
    ValuesComponent,
    FooterComponent,
    HvacComponent,
    HvacProductsComponent,
    HvacBushProductsComponent,
    ContactUsComponent,
    FreshAirTreatmentComponent,

    
    
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
   
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

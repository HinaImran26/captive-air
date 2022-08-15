import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { HomeComponent } from './views/home/home.component';
import { HvacProductsComponent } from './views/hvac-products/hvac-products.component';
import { HvacComponent } from './views/hvac/hvac.component';
import { LeadershipComponent } from './views/leadership/leadership.component';
import { OperationalexcellenceComponent } from './views/operationalexcellence/operationalexcellence.component';
import { ValuesComponent } from './views/values/values.component';


const routes: Routes = [

{
  path:'',
  component:HomeComponent
},
{
  path:'about',
  component:AboutComponent
},
{
  path:'leadership',
  component:LeadershipComponent
},
{
  path:'operational-excellence',
  component:OperationalexcellenceComponent
},
{
  path:'values',
  component:ValuesComponent
},
{
  path:'hvac',
  component:HvacComponent
}
,
{
  path:'hvac-products',
  component: HvacProductsComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

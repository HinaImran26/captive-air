import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { ExclusiveServicesComponent } from './views/exclusive-services/exclusive-services.component';
import { FireFightingComponent } from './views/fire-fighting/fire-fighting.component';
import { FireProtectionComponent } from './views/fire-protection/fire-protection.component';
import { FreshAirTreatmentComponent } from './views/fresh-air-treatment/fresh-air-treatment.component';
import { HomeComponent } from './views/home/home.component';
import { HvacDuctingComponent } from './views/hvac-ducting/hvac-ducting.component';
import { HvacComponent } from './views/hvac/hvac.component';
import { InstallationServicesComponent } from './views/installation-services/installation-services.component';
import { LeadershipComponent } from './views/leadership/leadership.component';
import { OperationMaintenaneComponent } from './views/operation-maintenane/operation-maintenane.component';
import { OperationalexcellenceComponent } from './views/operationalexcellence/operationalexcellence.component';
import { PlumbingComponent } from './views/plumbing/plumbing.component';
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
  path:'contact-us',
  component: ContactUsComponent
}
,
{
  path:'fresh-air-treatment',
  component: FreshAirTreatmentComponent
}
,
{
  path:'fire-protection',
  component: FireProtectionComponent
},

// {path:'plumbing',component: PlumbingComponent},
// {
//   path:'hvac-ducting',
//   component: HvacDuctingComponent
// }
// ,
// {
//   path:'fire-fighting',
//   component: FireFightingComponent
// }
// ,

// {path:'exclusive-services',component: ExclusiveServicesComponent},

// {path:'operation-maintenance',
//   component: OperationMaintenaneComponent},

{
  path:'installation-services',
  component: InstallationServicesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

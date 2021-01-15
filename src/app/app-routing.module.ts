import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AuthService } from './auth.service';
import { AuthComponent } from './auth/auth.component';
import { ContactComponent } from './contact/contact.component';
import { LandingComponent } from './landing/landing.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path: 'login',component:AuthComponent,},
  {
    path: 'addProject', 
    component: AddProjectComponent,
    canActivate:[AuthService]
  },
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', component: LandingComponent},
  {path: '**', component: LandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LandingComponent,
  PortfolioComponent,
  AboutComponent,
  ContactComponent,
  AddProjectComponent,
  AuthComponent,
]

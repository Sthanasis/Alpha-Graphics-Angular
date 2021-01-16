import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavigationItemsComponent } from './navigation-items/navigation-items.component';
import { NavigationItemComponent } from './navigationItem/navigationItem.component';
import { SocialComponent } from './social/social.component';
import { BackdropComponent } from './backdrop/backdrop.component';
import { LogoComponent } from './logo/logo.component';
import { LandingProjectComponent } from './landing-project/landing-project.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { AppHttpInteceptor } from './App-http-interceptor';
import { AuthStatus } from './authenticationStatus';
import { PortofolioProjectComponent } from './portofolio-project/portofolio-project.component';
import { ProjectComponent } from './project/project.component'

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavigationItemComponent,
    NavigationItemsComponent,
    routingComponents,
    SocialComponent,
    BackdropComponent,
    LogoComponent,
    LandingProjectComponent,
    ButtonComponent,
    InputComponent,
    PortofolioProjectComponent,
    ProjectComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass: AppHttpInteceptor,
    multi: true
  },AuthStatus],
  bootstrap: [AppComponent]
})
export class AppModule { 

 }

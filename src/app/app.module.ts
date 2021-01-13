import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavigationItemsComponent } from './navigation-items/navigation-items.component';
import { NavigationItemComponent } from './navigationItem/navigationItem.component';
import { SocialComponent } from './social/social.component';
import { BackdropComponent } from './backdrop/backdrop.component';
import { LogoComponent } from './logo/logo.component';
import { LandingProjectComponent } from './landing-project/landing-project.component';
import { ButtonComponent } from './button/button.component';

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
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

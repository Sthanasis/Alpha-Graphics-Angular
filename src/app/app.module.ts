import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule,routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavigationItemsComponent } from './navigation-items/navigation-items.component';
import { NavigationItemComponent } from './navigationItem/navigationItem.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavigationItemComponent,
    NavigationItemsComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

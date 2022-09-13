import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SpoilComponent } from './exos/spoil/spoil.component';
import { MenuComponent } from './exos/menu/menu.component';
import { ShoppingComponent } from './exos/shopping/shopping.component';
import { FormsModule } from '@angular/forms';
import { AccordeonComponent } from './exos/accordeon/accordeon.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    SpoilComponent,
    MenuComponent,
    ShoppingComponent,
		AccordeonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

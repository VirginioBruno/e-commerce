import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientFormComponent,
    HeaderNavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

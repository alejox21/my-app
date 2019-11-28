import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesComponent } from './components/heroes/heroes.component';
import { EvilComponentComponent } from './components/evil-component/evil-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    EvilComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA  // added this
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { routeComponents } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutChildOneComponent } from './about-child-one/about-child-one.component';
import { AboutChildTwoComponent } from './about-child-two/about-child-two.component';
import { AboutChildThreeComponent } from './about-child-three/about-child-three.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   routeComponents,
   PageNotFoundComponent,
   AboutChildOneComponent,
   AboutChildTwoComponent,
   AboutChildThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

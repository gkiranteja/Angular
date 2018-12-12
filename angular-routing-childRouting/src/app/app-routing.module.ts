import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutChildOneComponent } from './about-child-one/about-child-one.component';
import { AboutChildTwoComponent } from './about-child-two/about-child-two.component';
import { AboutChildThreeComponent } from './about-child-three/about-child-three.component';

const router: Routes = [
    
    //{ path: '', component: HomeComponent },   this is also one possible way

   //{ path: '', redirectTo: '/home', pathMatch: 'prefix' },  this is another way but it will callhome page everytime 
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
   { path: 'about', component: AboutComponent,
      children : [
          { path: "child-one", component: AboutChildOneComponent },
          { path: "child-two", component: AboutChildTwoComponent },
          { path: "child-three", component: AboutChildThreeComponent }
      ]
    },
   { path: 'products', component: ProductsComponent },
   { path: 'services', component: ServicesComponent },
   { path: 'contact', component: ContactComponent },
   { path: '**', component: PageNotFoundComponent }   
]

@NgModule({
   imports: [RouterModule.forRoot(router)],
   exports: [RouterModule]
})

export class AppRoutingModule {}

export const routeComponents = [HomeComponent, AboutComponent, ProductsComponent, ContactComponent, ServicesComponent]
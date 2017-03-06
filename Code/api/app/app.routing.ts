import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideoComponent } from './components/backgroundvideo/video.component';
import { BrandComponent } from './components/brands/brand.component';
import { ContactComponent } from './components/contactus/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { PressComponent } from './components/pressection/press.component';
import { BlogComponent } from './components/blog/blog.component';

export const routes: Routes = [
    {
        path: '',
        component: NavbarComponent

    },
    {
        path: 'about',
        redirectTo: '/aboutus',
        pathMatch: 'full'
    },
    {
        path: 'product',
        redirectTo: '/product',
        pathMatch: 'full'

    }
    ,
    {
        path: 'technology',
        redirectTo: '/technology',
        pathMatch: 'full'

    },
    {
        path: 'contactus',
        component: ContactComponent,
        pathMatch: 'full'

    },
    {   
        path: 'blog', 
        component: BlogComponent,
        redirectTo: '/blog',
         pathMatch: 'full'
    }

];

 @NgModule({
    imports: [RouterModule.forRoot(routes)],
     exports:[RouterModule]

 })
export class AppRoutingModule { }

export const routingComponents = [AppComponent, NavbarComponent, VideoComponent, BrandComponent,ContactComponent, FooterComponent, PressComponent, BlogComponent]
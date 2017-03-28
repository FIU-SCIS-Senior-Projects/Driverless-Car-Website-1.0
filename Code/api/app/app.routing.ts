import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideoComponent } from './components/backgroundvideo/video.component';
import { BrandComponent } from './components/brands/brand.component';
import { ContactComponent } from './components/contactus/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { PressComponent } from './components/pressection/press.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/homecomponent/home.component';
import { ProductComponent } from './components/products/prod.component';
import { AboutComponent } from './components/aboutus/about.component';
import { TechComponent } from './components/Technology/tech.component';
import { AdminComponent } from './components/Admin/admin.component';
import { NewBlogComponent } from './components/newblog/newblog.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';

import { fakeBackendProvider } from './components/_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AuthGuard } from './components/_guards/index';
import { AuthenticationService, UserService } from './components/_services/index';
import { HComponent } from './components/afterlogin/index';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'

    },
    {
        path: 'about',
        component: AboutComponent,
        pathMatch: 'full'
    },
    {
        path: 'product',
        component: ProductComponent,
        pathMatch: 'full'

    }
    ,
    {
        path: 'technology',
        component: TechComponent,
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
        pathMatch: 'full'
    },
    {
        path: 'blog/login',
        component: AdminComponent,
        pathMatch: 'full'
    },
    {
        path: 'blog/newblog',
        component: NewBlogComponent,
        canActivate: [AuthGuard]
    },
      {
        path: 'subscription',
        component: SubscriptionComponent,
        //canActivate: [AuthGuard]
        pathMatch: 'full'
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }

export const routingComponents = [AppComponent, HomeComponent,
    NavbarComponent, VideoComponent, BrandComponent, ContactComponent,
    FooterComponent, PressComponent, BlogComponent, ProductComponent, AboutComponent, TechComponent, AdminComponent, NewBlogComponent, HComponent,SubscriptionComponent]
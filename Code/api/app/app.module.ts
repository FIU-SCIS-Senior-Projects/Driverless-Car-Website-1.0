import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './components/blog/blog.component';
import { NewBlogComponent } from './components/newblog/newblog.component';
import { BlogService } from './services/blog.service';

import { SubscriptionService } from './services/subscription.service';
import { SubscriptionComponent } from './components/subscription/subscription.component';
//import { CommonModule } from '@angular/common';
import { AppConfig } from './app.config';
import { AlertComponent } from './components/_directives/index';


import { fakeBackendProvider } from './components/_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { AuthGuard } from './components/_guards/index';
import { AuthenticationService, AlertService, UserService } from './components/_services/index';
// import { AdminComponent } from './components/Admin/index';
// import { HComponent } from './components/afterlogin/index';

@NgModule({
    imports: [BrowserModule, AppRoutingModule, HttpModule, FormsModule, ReactiveFormsModule],
    declarations: [AppComponent, routingComponents, BlogComponent, NewBlogComponent,SubscriptionComponent],
    providers: [BlogService, AuthGuard, AlertService,
        AuthenticationService,
        UserService, UserService, AppConfig,SubscriptionService

    ],


    bootstrap: [AppComponent]

})
export class AppModule { }
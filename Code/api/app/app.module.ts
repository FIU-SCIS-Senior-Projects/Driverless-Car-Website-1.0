import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {AppComponent} from './app.component';
import {AppRoutingModule, routingComponents} from './app.routing';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BlogComponent} from './components/blog/blog.component';
import {BlogService} from './services/blog.service';
//import { CommonModule } from '@angular/common';


@NgModule({
    imports: [BrowserModule, AppRoutingModule,HttpModule],
    declarations: [AppComponent, routingComponents,BlogComponent],
    //providers: [ BlogService ],
    bootstrap: [AppComponent]

})
export class AppModule { }
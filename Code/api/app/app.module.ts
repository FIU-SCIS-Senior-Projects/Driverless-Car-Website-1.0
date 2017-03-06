import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule, routingComponents} from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


@NgModule({
    imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule,HttpModule],
    declarations: [AppComponent, routingComponents],
    bootstrap: [AppComponent]

})
export class AppModule { }
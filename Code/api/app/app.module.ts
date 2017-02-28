import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideoComponent } from './components/backgroundvideo/video.component';
import { BrandComponent } from './components/brands/brand.component';
import { ContactComponent } from './components/contactus/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { PressComponent } from './components/pressection/press.component';

const routes: Routes = [

];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes, { useHash: true }), FormsModule, ReactiveFormsModule],
    declarations: [AppComponent, NavbarComponent, BrandComponent, ContactComponent, FooterComponent, VideoComponent, PressComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
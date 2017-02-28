import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VidoeComponent } from './components/backgroundvideo/video.component';
import { ContactComponent } from './components/contactus/contact.component';
import { FooterComponent } from './components/footer/footer.component';


const routes: Routes = [

];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes, { useHash: true }), FormsModule, ReactiveFormsModule],
    declarations: [AppComponent, ContactComponent, FooterComponent, VidoeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
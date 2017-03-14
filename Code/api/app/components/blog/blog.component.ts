import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'blog-app',
    templateUrl: 'blog.component.html',
    styleUrls: ['blog.component.css'],


})
// @RouteConfig([
//     { path: '/login', name: 'Login' component: LoginComponent, useAsDefault: Login }
// ])
export class BlogComponent {

    hidden: boolean = true;


}
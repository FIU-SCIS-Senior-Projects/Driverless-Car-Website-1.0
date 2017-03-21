import { Component } from '@angular/core';
import {BlogService} from './services/blog.service';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers:[BlogService]

})

export class AppComponent {
   
 }


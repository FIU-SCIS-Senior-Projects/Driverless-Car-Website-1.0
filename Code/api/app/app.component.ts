import { Component } from '@angular/core';
import {BlogService} from './services/blog.service';
import {SubscriptionService} from './services/subscription.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers:[BlogService, SubscriptionService]

})

export class AppComponent {
   
 }


import { Component } from '@angular/core';
import {BlogService} from './services/blog.service';
import {SubscriptionService} from './services/subscription.service';
import { FileUploader } from 'ng2-file-upload';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers:[BlogService, SubscriptionService]

})

export class AppComponent {
    public uploader:FileUploader = new FileUploader({url:'http://localhost:4000/blog/newblog'});
 }


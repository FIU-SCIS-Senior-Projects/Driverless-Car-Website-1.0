import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { AdminComponent } from '../Admin/index';

@Component({
    moduleId: module.id,
    selector: 'footer-app',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.css'],
    providers: [AdminComponent]
})

export class FooterComponent {
    public location = '';

    constructor(private _router: Router, private adminComponent: AdminComponent) {
        this.location = _router.url;
    }
    fun() {
        console.log('function called');
        this.adminComponent.loggedin;
        console.log(this.adminComponent.loggedin);
    }

    logout() {
        this._router.navigate(['/blog/login']);
    }
}
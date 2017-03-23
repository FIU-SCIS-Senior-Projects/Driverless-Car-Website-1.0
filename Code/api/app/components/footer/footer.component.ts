import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
@Component({
    moduleId: module.id,
    selector: 'footer-app',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.css']
})

export class FooterComponent {
    public location = '';

    constructor(private _router: Router) {
        this.location = _router.url;
    }

    logout() {
        this._router.navigate(['/blog/login']);
    }
}
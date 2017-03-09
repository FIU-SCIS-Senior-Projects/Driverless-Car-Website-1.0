import { Component, ElementRef } from '@angular/core';
import { AuthenticationService, User } from './admin.service';

@Component({
    selector: 'admin-login',
    providers: [AuthenticationService],
    templateUrl: 'admin.component.html'
})

export class AdminComponent {

    public user = new User('', '');
    public errorMsg = '';

    constructor(private _service: AuthenticationService) { }

    login() {
        if (!this._service.login(this.user)) {
            this.errorMsg = 'Failed to login';
        }
    }

}
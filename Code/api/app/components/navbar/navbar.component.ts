import { Component, NgZone } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'navbar-app',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})

export class NavbarComponent {
    private title: string;

    constructor() {
        this.title = 'SWIFAST';

    }


}
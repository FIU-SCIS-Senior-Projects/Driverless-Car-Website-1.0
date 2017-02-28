import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'navbar-app',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent {
    private title: string;

    constructor() {
        this.title = 'DriverlessCar';
    }
}
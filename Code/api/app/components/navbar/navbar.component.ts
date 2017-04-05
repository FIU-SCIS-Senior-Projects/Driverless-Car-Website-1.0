import { Component, NgZone } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'navbar-app',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})

export class NavbarComponent {
    private title: string;
    isShrunk: boolean = false;

    constructor(zone: NgZone) {
        this.title = 'DriverlessCar';
        window.onscroll = () => {
            zone.run(() => {
                if (window.pageYOffset > 0) {
                    this.isShrunk = true;
                } else {
                    this.isShrunk = false;
                }
            });
        }
    }

}
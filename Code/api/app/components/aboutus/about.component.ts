import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'about-app',
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.css']
})

export class AboutComponent {
    fullImagePath: string;
    fullImagePath2: string;


    constructor() {
        this.fullImagePath = 'images/aboutus/nathally.png'
        this.fullImagePath2 = 'images/aboutus/mariana.png'
    }
    ngOnInit() {

    }
}
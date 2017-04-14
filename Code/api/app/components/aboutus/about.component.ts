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
    fullImagePath3: string;
     fullImagePath4: string;

    constructor() {
        this.fullImagePath = 'images/aboutus/nathally.png'
        this.fullImagePath2 = 'images/aboutus/mariana.jpg'
        this.fullImagePath3 = 'images/aboutus/kianoosh.jpg'
        this.fullImagePath4 = 'images/aboutus/mohsen.jpg'
    }
    ngOnInit() {

    }
}
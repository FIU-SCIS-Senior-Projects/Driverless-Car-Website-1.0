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
    fullImagePath5: string;
    fullImagePath6: string;


    constructor() {
        this.fullImagePath = 'images/aboutus/nathally.png'
        this.fullImagePath2 = 'images/aboutus/mariana.png'
        this.fullImagePath3 = 'images/aboutus/christopher.png'
        this.fullImagePath4 = 'images/aboutus/max.png'
        this.fullImagePath5 = 'images/aboutus/mohsen.png'
        this.fullImagePath6= 'images/aboutus/kianoosh.png'
    }
    ngOnInit() {

    }
}
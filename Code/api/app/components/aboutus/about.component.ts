import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'about-app',
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.css']
})

export class AboutComponent { 
    fullVideoPath: string;
    fullVideoPath2: string;
    fullVideoPath3: string;
    fullVideoPath4: string;
    

    constructor() {
        this.fullVideoPath = 'images/aboutus/nathally.jpg'
        this.fullVideoPath2 = 'images/aboutus/mariana.jpg'
        this.fullVideoPath3 = 'images/aboutus/christopher.jpg'
        this.fullVideoPath4 = 'images/aboutus/max.jpg'
    }
     ngOnInit() {

    }
}
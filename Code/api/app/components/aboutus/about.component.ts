import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'about-app',
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.css']
})

export class AboutComponent { 
    fullVideoPath: string;

    constructor() {
        this.fullVideoPath = 'images/nathally.jpg'
    }

    ngOnInit() {

    }
}
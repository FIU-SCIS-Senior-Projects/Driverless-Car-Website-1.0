import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'prod-app',
    templateUrl: 'prod.component.html',
    styleUrls: ['prod.component.css']
})

export class ProductComponent {
    fullVideoPath: string;


    constructor() {
        this.fullVideoPath = 'images/video/video2_background.mp4'
    }
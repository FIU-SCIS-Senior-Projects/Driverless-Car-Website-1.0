import { Component, OnInit } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'video-app',
    templateUrl: 'video.component.html',


})

export class VideoComponent {
    fullVideoPath: string;

    constructor() {
        this.fullVideoPath = 'images/video/webvideov5-HD.mp4'
    }

    ngOnInit() {

    }
}

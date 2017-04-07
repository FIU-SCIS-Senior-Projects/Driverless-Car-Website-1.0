import { Component, OnInit } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'video-app',
    templateUrl: 'video.component.html',
    styleUrls: ['video.component.css']


})

export class VideoComponent {
    fullVideoPath: string;
    fullVideoPath3: string;

    constructor() {
        this.fullVideoPath = 'images/video/webvideov5-HD.mp4'
        this.fullVideoPath3 = 'images/video/UnitySimDemo.mov'
    }

    ngOnInit() {

    }
}

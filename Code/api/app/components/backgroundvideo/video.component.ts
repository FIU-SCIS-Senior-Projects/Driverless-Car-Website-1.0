import { Component } from '@angular/core';

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
        this.fullVideoPath = 'images/video/video2_background.mp4'
        this.fullVideoPath3 = 'images/video/UnitySimDemo.mp4'
    }

    toggleVideo(event) {
        window.open('images/video/video2_background.mp4', '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
    }

}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var VideoComponent = (function () {
    function VideoComponent() {
        this.fullVideoPath = 'images/video/video2_background.mp4';
        this.fullVideoPath3 = 'images/video/UnitySimDemo.mp4';
    }
    VideoComponent.prototype.toggleVideo = function (event) {
        window.open('images/video/video2_background.mp4', '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
    };
    return VideoComponent;
}());
VideoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'video-app',
        templateUrl: 'video.component.html',
        styleUrls: ['video.component.css']
    }),
    __metadata("design:paramtypes", [])
], VideoComponent);
exports.VideoComponent = VideoComponent;
//# sourceMappingURL=video.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var BlogComponent = (function () {
    function BlogComponent() {
        this.blogForm = new forms_1.FormGroup({
            title: new forms_1.FormControl(),
            content: new forms_1.FormControl(),
            author: new forms_1.FormControl()
        });
    }
    BlogComponent.prototype.onSubmit = function () {
        console.log(this.blogForm.value);
    };
    return BlogComponent;
}());

BlogComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'blog-app',
        templateUrl: 'blog.component.html',
        styleUrls: ['blog.component.css'],
        styles: ["\n    input-ng-invalid {broder-left: 5px solid red;}\n    input-ng-valid {broder-left: 5px solid green;}"]
    })
], BlogComponent);
exports.BlogComponent = BlogComponent;
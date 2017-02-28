"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ContactComponent = (function () {
    function ContactComponent() {
        this.contactForm = new forms_1.FormGroup({
            name: new forms_1.FormControl(),
            email: new forms_1.FormControl(),
            subject: new forms_1.FormControl(),
            message: new forms_1.FormControl()
        });
    }
    ContactComponent.prototype.onSubmit = function () {
        console.log(this.contactForm.value);
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'contact-us',
        templateUrl: 'contact.component.html',
        styles: ["\n    input-ng-invalid {broder-left: 5px solid red;}\n    input-ng-valid {broder-left: 5px solid green;}"]
    })
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map
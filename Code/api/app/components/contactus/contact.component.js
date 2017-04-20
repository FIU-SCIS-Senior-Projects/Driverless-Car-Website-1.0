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
var contact_service_1 = require("../../services/contact.service");
var router_1 = require("@angular/router");
var ContactComponent = (function () {
    function ContactComponent(contactService, route, router) {
        this.contactService = contactService;
        this.route = route;
        this.router = router;
        this.model = {};
        this.errorMessage = '';
    }
    ContactComponent.prototype.ngOnInit = function () {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    ContactComponent.prototype.SendMail = function () {
        var _this = this;
        this.contactService.SendMail(this.model.name, this.model.email, this.model.subject, this.model.message)
            .subscribe(function (data) {
            _this.model.name = '';
            _this.model.email = '';
            _this.model.subject = '';
            _this.model.message = '';
            _this.router.navigate(['']);
        }, function (error) {
            _this.errorMessage = error;
            //console.log(this.errorMessage);
            _this.router.navigate(['']);
        });
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'contact-us',
        templateUrl: 'contact.component.html',
        styleUrls: ['contact.component.css'],
        styles: ["\n    input-ng-invalid {broder-left: 5px solid red;}\n    input-ng-valid {broder-left: 5px solid green;}"],
        providers: [contact_service_1.ContactService]
    }),
    __metadata("design:paramtypes", [contact_service_1.ContactService,
        router_1.ActivatedRoute,
        router_1.Router])
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map
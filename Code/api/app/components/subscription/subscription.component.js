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
var subscription_service_1 = require("../../services/subscription.service");
var router_1 = require("@angular/router");
var SubscriptionComponent = (function () {
    function SubscriptionComponent(subscriptionService, route, router) {
        this.subscriptionService = subscriptionService;
        this.route = route;
        this.router = router;
        this.subscriptions = [];
        this.errorMessage = '';
    }
    SubscriptionComponent.prototype.addSubscription = function (event) {
        var _this = this;
        event.preventDefault();
        var subscription = {
            name: this.name,
            email: this.email
        };
        this.subscriptionService.addSubscription(subscription)
            .subscribe(function (data) {
            _this.subscriptions.push(data);
            _this.name = '';
            _this.email = '';
            alert("You are now subscribed!");
            _this.router.navigate(['']);
        }, function (error) {
            _this.errorMessage = error;
            _this.router.navigate(['']);
        });
    };
    return SubscriptionComponent;
}());
SubscriptionComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'subscription-app',
        templateUrl: 'subscription.component.html',
        styleUrls: ['subscription.component.css'],
        providers: [subscription_service_1.SubscriptionService]
    }),
    __metadata("design:paramtypes", [subscription_service_1.SubscriptionService, router_1.ActivatedRoute,
        router_1.Router])
], SubscriptionComponent);
exports.SubscriptionComponent = SubscriptionComponent;
//# sourceMappingURL=subscription.component.js.map
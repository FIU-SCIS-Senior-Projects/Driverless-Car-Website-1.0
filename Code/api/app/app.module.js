"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var forms_1 = require("@angular/forms");
var blog_component_1 = require("./components/blog/blog.component");
var newblog_component_1 = require("./components/newblog/newblog.component");
var blog_service_1 = require("./services/blog.service");
//import { CommonModule } from '@angular/common';
var app_config_1 = require("./app.config");
var index_1 = require("./components/_guards/index");
var index_2 = require("./components/_services/index");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_1.AppRoutingModule, http_1.HttpModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
        declarations: [app_component_1.AppComponent, app_routing_1.routingComponents, blog_component_1.BlogComponent, newblog_component_1.NewBlogComponent],
        providers: [blog_service_1.BlogService, index_1.AuthGuard, index_2.AlertService,
            index_2.AuthenticationService,
            index_2.UserService, index_2.UserService, app_config_1.AppConfig,
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var video_component_1 = require("./components/backgroundvideo/video.component");
var brand_component_1 = require("./components/brands/brand.component");
var contact_component_1 = require("./components/contactus/contact.component");
var footer_component_1 = require("./components/footer/footer.component");
var press_component_1 = require("./components/pressection/press.component");
var routes = [
    {
        path: '',
        component: navbar_component_1.NavbarComponent
    },
    {
        path: 'about',
        redirectTo: '/aboutus',
        pathMatch: 'full'
    },
    {
        path: 'product',
        redirectTo: '/product',
        pathMatch: 'full'
    },
    {
        path: 'technology',
        redirectTo: '/technology',
        pathMatch: 'full'
    },
    {
        path: 'contactus',
        component: contact_component_1.ContactComponent,
        pathMatch: 'full'
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(routes, { useHash: true }), forms_1.FormsModule, forms_1.ReactiveFormsModule],
        declarations: [app_component_1.AppComponent, navbar_component_1.NavbarComponent, brand_component_1.BrandComponent, contact_component_1.ContactComponent, footer_component_1.FooterComponent, video_component_1.VideoComponent, press_component_1.PressComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var video_component_1 = require("./components/backgroundvideo/video.component");
var brand_component_1 = require("./components/brands/brand.component");
var contact_component_1 = require("./components/contactus/contact.component");
var footer_component_1 = require("./components/footer/footer.component");
var press_component_1 = require("./components/pressection/press.component");
var blog_component_1 = require("./components/blog/blog.component");
var home_component_1 = require("./components/homecomponent/home.component");
var prod_component_1 = require("./components/products/prod.component");
var about_component_1 = require("./components/aboutus/about.component");
var tech_component_1 = require("./components/Technology/tech.component");
var admin_component_1 = require("./components/Admin/admin.component");
exports.routes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent,
        pathMatch: 'full'
    },
    {
        path: 'product',
        component: prod_component_1.ProductComponent,
        pathMatch: 'full'
    },
    {
        path: 'technology',
        component: tech_component_1.TechComponent,
        pathMatch: 'full'
    },
    {
        path: 'contactus',
        component: contact_component_1.ContactComponent,
        pathMatch: 'full'
    },
    {
        path: 'blog',
        component: blog_component_1.BlogComponent,
        pathMatch: 'full'
    },
    {
        path: 'blog/login',
        component: admin_component_1.AdminComponent,
        pathMatch: 'full'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(exports.routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [app_component_1.AppComponent, home_component_1.HomeComponent,
    navbar_component_1.NavbarComponent, video_component_1.VideoComponent, brand_component_1.BrandComponent, contact_component_1.ContactComponent,
    footer_component_1.FooterComponent, press_component_1.PressComponent, blog_component_1.BlogComponent, prod_component_1.ProductComponent, about_component_1.AboutComponent, tech_component_1.TechComponent, admin_component_1.AdminComponent];
//# sourceMappingURL=app.routing.js.map
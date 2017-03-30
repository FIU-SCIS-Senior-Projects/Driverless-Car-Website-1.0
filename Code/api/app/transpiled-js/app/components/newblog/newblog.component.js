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
var blog_service_1 = require("../../services/blog.service");
var router_1 = require("@angular/router");
var ng2_file_upload_1 = require("ng2-file-upload");
// multer is the node package that lets you get files from a form
// import * as multer from 'multer';
// import * as fs from 'fs';
// import * as request from 'request';
// import * as Jimp from 'jimp';
// let indexRouter = express.Router();
var NewBlogComponent = (function () {
    function NewBlogComponent(blogService, route, router) {
        var _this = this;
        this.blogService = blogService;
        this.route = route;
        this.router = router;
        this.uploader = new ng2_file_upload_1.FileUploader({ url: 'http://localhost:4000/blog/newblog' });
        this.blogService.getBlog()
            .subscribe(function (blogs) {
            _this.blogs = blogs;
        });
    }
    NewBlogComponent.prototype.ngOnInit = function () {
        // this.authenticationService.logout();
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    NewBlogComponent.prototype.addBlog = function (event) {
        var _this = this;
        event.preventDefault();
        var newblog = {
            title: this.title,
            content: this.content
        };
        this.blogService.addBlog(newblog)
            .subscribe(function (blog) {
            _this.blogs.push(blog);
            _this.title = '';
            _this.content = '';
            _this.router.navigate(['/blog']);
        });
    };
    return NewBlogComponent;
}());
NewBlogComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'newblog-app',
        templateUrl: 'newblog.component.html',
        styleUrls: ['newblog.component.css'],
        providers: [blog_service_1.BlogService]
    }),
    __metadata("design:paramtypes", [blog_service_1.BlogService, router_1.ActivatedRoute,
        router_1.Router])
], NewBlogComponent);
exports.NewBlogComponent = NewBlogComponent;
//# sourceMappingURL=newblog.component.js.map
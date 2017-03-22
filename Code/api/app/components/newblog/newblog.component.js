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
var forms_1 = require("@angular/forms");
var blog_service_1 = require("../../services/blog.service");
var NewBlogComponent = (function () {
    function NewBlogComponent(blogService) {
        var _this = this;
        this.blogService = blogService;
        this.blogForm = new forms_1.FormGroup({
            title: new forms_1.FormControl(),
            content: new forms_1.FormControl()
        });
        this.blogService.getBlog()
            .subscribe(function (blogs) {
            _this.blogs = blogs;
        });
    }
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
    __metadata("design:paramtypes", [blog_service_1.BlogService])
], NewBlogComponent);
exports.NewBlogComponent = NewBlogComponent;
//# sourceMappingURL=newblog.component.js.map
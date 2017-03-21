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
var core_1 = require("@angular/core");
//var blog_service_1 = require('../../services/blog.service');
var BlogComponent = (function () {
    function BlogComponent() {
        //this.hidden = true;
        // var _this = this;
        // this.blogService = blogService;
        // this.blogService.getBlog()
        //     .subscribe(function (blogs) {
        //     _this.blogs = blogs;
        //     });
    }
    //return BlogComponent;
//}());

BlogComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'blog-app',
        templateUrl: 'blog.component.html',
        styleUrls: ['blog.component.css']
    }),
__metadata('design:paramtypes', [])
    ], BlogComponent);
 return BlogComponent;
}());
exports.BlogComponent = BlogComponent;




// "use strict";
// var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
//     var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
//     if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
//     else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
//     return c > 3 && r && Object.defineProperty(target, key, r), r;
// };
// var __metadata = (this && this.__metadata) || function (k, v) {
//     if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
// };
// var core_1 = require('@angular/core');
// var blog_service_1 = require('../../services/blog.service');
// var BlogComponent = (function () {
//     function BlogComponent(blogService) {
//         var _this = this;
//         this.blogService = blogService;
//         this.blogService.getBlog()
//             .subscribe(function (blogs) {
//             _this.blogs = blogs;
//         });
//     }
//     BlogComponent.prototype.addBlog= function (event) {
//         var _this = this;
//         event.preventDefault();
//         var newBlog = {
//             title: this.title,
//             content: this.content
//         };
//         this.blogService.addBlog(newBlog)
//             .subscribe(function (blog) {
//             _this.blogs.push(blog);
//             _this.title = '';
//             _this.content=''
//         });
//     };
//     // BlogComponent.prototype.deleteBlog = function (id) {
//     //     var blogs = this.blogs;
//     //     this.blogService.deleteBlog(id).subscribe(function (data) {
//     //         if (data.n == 1) {
//     //             for (var i = 0; i < blogs.length; i++) {
//     //                 if (blogs[i]._id == id) {
//     //                     blogs.splice(i, 1);
//     //                 }
//     //             }
//     //         }
//     //     });
//     // };
//     BlogComponent.prototype.updateBlog = function (blog) {
//         var _blog= {
//             _id: _blog._id,
//             title: blog.title,
//             content: !blog.content
//         };
//         this.blogService.updateBlog(_blog).subscribe(function (data) {
//             blog.content = !blog.content;
//         });
//     };
//     BlogComponent = __decorate([
//         core_1.Component({
//             moduleId: module.id,
//             selector: 'blog-app',
//             templateUrl: 'blog.component.html'
//         }), 
//         __metadata('design:paramtypes', [blog_service_1.BlogService])
//     ], BlogComponent);
//     return BlogComponent;
// }());
// exports.BlogComponent = BlogComponent;
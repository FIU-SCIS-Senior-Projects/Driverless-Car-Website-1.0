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
var BlogComponent = (function () {
    //blogs: Array<any>;
    function BlogComponent(blogService) {
        var _this = this;
        this.blogService = blogService;
        this.blogService.getBlog()
            .subscribe(function (blogs) {
            _this.blogs = blogs;
            //console.log(blogs);
        });
    }
    return BlogComponent;
}());
BlogComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'blog-app',
        templateUrl: 'blog.component.html',
        styleUrls: ['blog.component.css'],
        providers: [blog_service_1.BlogService]
    }),
    __metadata("design:paramtypes", [blog_service_1.BlogService])
], BlogComponent);
exports.BlogComponent = BlogComponent;
// import { Component } from '@angular/core';
// import {BlogService} from '../../services/blog.service';
// import {Blog} from '../../../Blog';
// @Component({
//   moduleId: module.id,
//   selector: 'blog-app',
//   templateUrl: 'blog.component.html'
// })
// export class BlogComponent { 
//     blogs: Blog[];
//     title: string;
//     content: string;
//     constructor(private blogService:BlogService){
//         this.blogService.getBlog()
//             .subscribe(blogs => {
//                 this.blogs = blogs;
//             });
//     }
//     addBlog(event){
//         event.preventDefault();
//         var newBlog = {
//             title: this.title,
//             content: this.content
//         }
//         this.blogService.addBlog(newBlog)
//             .subscribe(blog => {
//                 this.blogs.push(blog);
//                 this.title = '';
//                 this.content = '';
//             });
//     }
//     // deleteBlog(id){
//     //     var blogs = this.blogs;
//     //     this.blogService.deleteBlog(id).subscribe(data => {
//     //         if(data.n == 1){
//     //             for(var i = 0;i < blogs.length;i++){
//     //                 if(blogs[i]._id == id){
//     //                     blogs.splice(i, 1);
//     //                 }
//     //             }
//     //         }
//     //     });
//     // }
//     updateBlog(blog){
//         var _blog = {
//             _id:blog._id,
//             title: blog.title,
//             content: !blog.content
//         };
//         this.blogService.updateBlog(_blog).subscribe(data => {
//             blog.content = !blog.content;
//         });
//     }
// }
//# sourceMappingURL=blog.component.js.map
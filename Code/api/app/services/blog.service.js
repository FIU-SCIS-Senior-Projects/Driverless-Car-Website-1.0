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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var BlogService = (function () {
    function BlogService(http) {
        this.http = http;
        console.log('Blog Service Initialized...');
    }
    BlogService.prototype.getBlog = function () {
        return this.http.get('/blog')
            .map(function (res) { return res.json(); });
    };
    BlogService.prototype.addBlog = function (newBlog) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/blog', JSON.stringify(newBlog), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // deleteBlog(id){
    //     return this.http.delete('/blog'+id)
    //         .map(res => res.json());
    // }
    BlogService.prototype.updateBlog = function (blog) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/blog' + blog._id, JSON.stringify(blog), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return BlogService;
}());
BlogService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BlogService);
exports.BlogService = BlogService;
// import {Injectable} from '@angular/core';
// import {Http, Headers} from '@angular/http';
// import 'rxjs/add/operator/map';
// @Injectable()
// export class BlogService{
//     constructor(private http:Http){
//         console.log('Blog Service Initialized...');
//     }
//     getBlog(){
//         return this.http.get('/blog')
//             .map(res => res.json());
//     }
//     addBlog(newBlog){
//         var headers = new Headers();
//         headers.append('Content-Type', 'application/json');
//         return this.http.post('/blog', JSON.stringify(newBlog), {headers: headers})
//             .map(res => res.json());
//     }
//     // deleteBlog(id){
//     //     return this.http.delete('/blog'+id)
//     //         .map(res => res.json());
//     // }
//     updateBlog(blog){
//         var headers = new Headers();
//         headers.append('Content-Type', 'application/json');
//         return this.http.put('/blog'+blog._id, JSON.stringify(blog), {headers: headers})
//             .map(res => res.json());
//     }
// } 
//# sourceMappingURL=blog.service.js.map
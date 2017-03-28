import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {BlogService} from '../../services/blog.service';
import {Blog} from '../../../Blog';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'blog-app',
    templateUrl: 'blog.component.html',
    styleUrls: ['blog.component.css'],
    providers: [BlogService]

})

export class BlogComponent {

    blogs: Blog[];
    public location = '';
    title: string;
    content: string;

    constructor(private blogService: BlogService, private _router: Router){
        this.blogService.getBlog()
            .subscribe(blogs => {
                this.blogs = blogs;
            });
             this.location = _router.url;
    }
    
     redirect() {
        this._router.navigate(['blog/newblog']);
    }
     addBlog(event){
        event.preventDefault();
        var newBlog = {
            title: this.title,
            content: this.content
        }
        
        this.blogService.addBlog(newBlog)
            .subscribe(blog => {
                this.blogs.push(blog);
                this.title = '';
                this.content = '';
            });
    }
    
    // deleteBlog(id){
    //     var blogs = this.blogs;
        
    //     this.blogService.deleteBlog(id).subscribe(data => {
    //         if(data.n == 1){
    //             for(var i = 0;i < blogs.length;i++){
    //                 if(blogs[i]._id == id){
    //                     blogs.splice(i, 1);
    //                 }
    //             }
    //         }
    //     });
    // }
    
    // updateBlog(blog){
    //     var _blog = {
    //         _id:blog._id,
    //         title: blog.title,
    //         content: !blog.content
    //     };
        
    //     this.blogService.updateBlog(_blog).subscribe(data => {
    //         blog.content = !blog.content;
    //     });
    // }

}


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

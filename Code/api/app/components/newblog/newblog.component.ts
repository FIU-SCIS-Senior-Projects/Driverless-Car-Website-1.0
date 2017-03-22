import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../../Blog';
//import { Router } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'newblog-app',
    templateUrl: 'newblog.component.html',
    styleUrls: ['newblog.component.css'],
    providers: [BlogService]

})

export class NewBlogComponent {
    blogs: Blog[];
    title: string;
    content: string;

    constructor(private blogService: BlogService, private route: ActivatedRoute,
        private router: Router, ) {
        this.blogService.getBlog()
            .subscribe(blogs => {
                this.blogs = blogs;
            });
    }

    addBlog(event) {
        event.preventDefault();
        var newblog = {
            title: this.title,
            content: this.content
        }

        this.blogService.addBlog(newblog)
            .subscribe(blog => {
                this.blogs.push(blog);
                this.title = '';
                this.content = '';
                this.router.navigate(['/blog']);
            });
    }
}
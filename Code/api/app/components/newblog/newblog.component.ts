import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../../Blog';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'newblog-app',
    templateUrl: 'newblog.component.html',
    styleUrls: ['newblog.component.css'],
    providers: [BlogService]

})

export class NewBlogComponent implements OnInit{
    blogs: Blog[];
    title: string;
    content: string;
    imageURL: String;

    constructor(private blogService: BlogService, private route: ActivatedRoute,
        private router: Router) {

        this.blogService.getBlog()
            .subscribe(blogs => {
                this.blogs = blogs;
            });
    }
    ngOnInit() {
    }

    addBlog(event) {
        event.preventDefault();
        var newblog = {
            title: this.title,
            content: this.content,
            imageURL: this.imageURL
        }

        this.blogService.addBlog(newblog)
            .subscribe(blog => {
                this.blogs.push(blog);
                this.title = '';
                this.content = '';
                this.imageURL = '';
                this.router.navigate(['/blog']);
            });
    }
}

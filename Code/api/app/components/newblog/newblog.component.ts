import { Component,OnInit } from '@angular/core';
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
ngOnInit() {
        // this.authenticationService.logout();
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

addBlog(event){
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
    // fileChange(event) {
    // let fileList: FileList = event.target.files;
    // if(fileList.length > 0) {
    //     let file: File = fileList[0];
    //     let formData:FormData = new FormData();
    //     formData.append('uploadFile', file, file.name);
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'multipart/form-data');
    //     headers.append('Accept', 'application/json');
    //     let options = new RequestOptions({ headers: headers });
    //     this.http.post(`${this.apiEndPoint}`, formData, options)
    //         .map(res => res.json())
    //         .catch(error => Observable.throw(error))
    //         .subscribe(
    //             data => console.log('success'),
    //             error => console.log(error)
    //         )
    //     }
    // }
}
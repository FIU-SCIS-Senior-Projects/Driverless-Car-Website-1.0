import { Injectable } from '@angular/core';
import {Http, Headers,Request, RequestMethod, URLSearchParams, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

declare var $: any;

@Injectable()

export class BlogService{

    requestUrl: string;
    responseData: any;
    handleError: any;

    constructor(private http:Http){
        console.log('Blog Service Initialized...');
    }

    getBlog() {
        return this.http.get('/blog')
            .map(res => res.json());
    }
    addBlog(newBlog) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:4000/blog/newblog', JSON.stringify(newBlog), { headers: headers })
            .map(res => res.json());
    }
}
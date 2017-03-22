import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogService{
    constructor(private http:Http){
        console.log('Blog Service Initialized...');
    }

    getBlog(){
        return this.http.get('/blog')
            .map(res => res.json());
    }
     addBlog(newBlog){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:4000/blog/newblog', JSON.stringify(newBlog), {headers: headers})
            .map(res => res.json());
    }
    
    // deleteBlog(id){
    //     return this.http.delete('/blog'+id)
    //         .map(res => res.json());
    // }
    
    // updateBlog(blog){
    //     var headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     return this.http.put('ttp://localhost:4000/blog/newblog'+blog._id, JSON.stringify(blog), {headers: headers})
    //         .map(res => res.json());
    // }

}
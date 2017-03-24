import { Injectable } from '@angular/core';
import {Http, Headers,Request, RequestMethod, URLSearchParams, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
//import { Constants } from './constants';

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


//     fileChange(event) {
//     let fileList: FileList = event.target.files;
//     if(fileList.length > 0) {
//         let file: File = fileList[0];
//         let formData:FormData = new FormData();
//         formData.append('uploadFile', file, file.name);
//         let headers = new Headers();
//         headers.append('Content-Type', 'multipart/form-data');
//         headers.append('Accept', 'application/json');
//         let options = new RequestOptions({ headers: headers });
//         this.http.post(`${this.apiEndPoint}`, formData, options)
//             .map(res => res.json())
//             .catch(error => Observable.throw(error))
//             .subscribe(
//                 data => console.log('success'),
//                 error => console.log(error)
//             )
//     }
// }
    
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
import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../../Blog';
import { Router, ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

// multer is the node package that lets you get files from a form
// import * as multer from 'multer';
// import * as fs from 'fs';
// import * as request from 'request';
// import * as Jimp from 'jimp';
// let indexRouter = express.Router();

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
     public uploader:FileUploader = new FileUploader({url:'http://localhost:4000/blog/newblog'});

//     // This will determine where to save the file(s)
// let d = new Date();
// let tempMonth = d.getMonth() + 1;
// // the destination can be anything
// let destination = '/uploads/' + d.getFullYear() + '/' + tempMonth + '/';
// let storageValues = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, destination)
//     },
//     filename: (req, file, cb) => {  //the filename can be whatever
//         cb(null, Date.now() + '-' + file.originalname)
//     }
// })


// let upload = multer({ storage: storageValues });

// // ABOVE IS TO SAVE FILES TO FILE SYSTEM
// // BELOW IS TO SAVE FILES IN DATABASE

// /**
//  *
//  */
// indexRouter.get('/success', (req, res) => {
//     res.status(200).render('success', {
//         title: 'Driverless-Cars-Website',
//         message: 'Images Uploaded Successfully'
//     }).end();
// });


// /**
//  * upload.array is 128 items at a time.
//  */
// indexRouter.post('/upload', upload.array('assets', 128), (req, res) => {

//     // see what you're getting in console.log
//     console.log(req.files);
//     console.log(req.body);

// // for each file in the array
//     req.files.forEach((file, index) => {

// // dont need this
//         console.log(file);

//  let options = {
//                 method: 'POST',
//                 url: 'http://localhost:4000/blog/newblog',
//                 headers:
//                 {
//                     'content-type': 'application/json'
//                 },
//                 body: {
//                     fileName: file.originalname,
//                     title: req.body.title,
//                     caption: req.body.caption,
//                     altText: req.body.caption,
//                     description: req.body.description,
//                     fileType: file.mimetype,
//                     uploadedBy: "admin",
//                     fileSize: file.size,
//                     relativePath: file.path
//                 },
//                 json: true
//             };//options

//             request(options, (error, response, body) => {
//                 if (error) throw new Error(error);
//                 console.log(body);
//             });
//         });//each statement
//     });//post statement
//     res.status(200).redirect('success').end();
// }

// export { indexRouter };






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
import { Injectable } from '@angular/core';
import { Http, Headers, Response, Request, RequestMethod, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { AppConfig } from '../app.config';


@Injectable()

export class ContactService {

    constructor(private http: Http, private config: AppConfig) {
        console.log('Contact Service Initialized...');
    }



    SendMail(name: string, email: string, subject: string, message: string) {
        // console.log(name);
        // console.log(email);
        // console.log(subject);
        // console.log(message);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.config.apiUrl + '/contactus/send', JSON.stringify({ name: name, email: email, subject: subject, message: message }), { headers: headers })
            .map(res => res.json());

    }

}



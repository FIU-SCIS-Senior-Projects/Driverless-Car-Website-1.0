import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
//import { Constants } from './constants';



@Injectable()

export class SubscriptionService {


    constructor(private http: Http) {
        console.log('subscription Service Initialized...');
    }



    addSubscription(subscribe) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:4000/subscription', JSON.stringify(subscribe), { headers: headers })
            .map(res => res.json());
    }

}
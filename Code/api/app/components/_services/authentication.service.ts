import { HostListener, Injectable, } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { AppConfig } from '../../app.config';

@Injectable()
export class AuthenticationService {

    public token: string;

    constructor(private http: Http, private config: AppConfig) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        return this.http.post(this.config.apiUrl + '/api/authenticate', { username: username, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                let user = response.json();
                if (token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this.token = token
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    return true;
                }
                else {

                    return false;

                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        console.log('logged out');
    }

}
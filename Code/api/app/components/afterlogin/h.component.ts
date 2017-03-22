import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'h.component.html',
    //directives: [ROUTER_DIRECTIVES],
})

export class HComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService) { }

    ngOnInit() {
        // get users from secure api end point
        this.userService.getUsers()
            .subscribe(users => {
                this.users = users;
            });
    }

}
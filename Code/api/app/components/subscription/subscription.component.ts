import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionService } from '../../services/subscription.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from '../../../Subscription';

@Component({
    moduleId: module.id,
    selector: 'subscription-app',
    templateUrl: 'subscription.component.html',
    styleUrls: ['subscription.component.css'],
    providers: [SubscriptionService]

})

export class SubscriptionComponent {
    subscriptions:Subscription[] = [];
    name: string;
    email: string;
    errorMessage = '';

    constructor(private subscriptionService: SubscriptionService, private route: ActivatedRoute,
        private router: Router, ) {

    }

    addSubscription(event) {
        event.preventDefault();
        var subscription = {
            name: this.name,
            email: this.email
        }

        this.subscriptionService.addSubscription(subscription)
            .subscribe(data => {
                this.subscriptions.push(data);
                this.name = '';
                this.email = '';
                alert("You are now subscribe!");
                this.router.navigate(['']);
            },
            error => {
                this.errorMessage = <any>error;
                this.router.navigate(['']);
            });
    }

}
import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { ContactUs } from '../../../Contact';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'contact-us',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.css'],
    styles: [`
    input-ng-invalid {broder-left: 5px solid red;}
    input-ng-valid {broder-left: 5px solid green;}`],
    providers: [ContactService]
})



export class ContactComponent {
    model: any = {};
    errorMessage = '';
    returnUrl: string;
    constructor(
        private contactService: ContactService,
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {


        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    SendMail() {
        this.contactService.SendMail(this.model.name, this.model.email, this.model.subject, this.model.message)
            .subscribe(data => {

                this.model.name = '';
                this.model.email = '';
                this.model.subject = '';
                this.model.message = '';
                this.router.navigate(['']);
            },
            error => {
                this.errorMessage = <any>error
                //console.log(this.errorMessage);
                this.router.navigate(['']);
            }
            );

    }

}
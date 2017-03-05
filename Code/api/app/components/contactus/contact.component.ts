import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'contact-us',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.css'],
    styles: [`
    input-ng-invalid {broder-left: 5px solid red;}
    input-ng-valid {broder-left: 5px solid green;}`]
})

export class ContactComponent {
    contactForm = new FormGroup({
        name: new FormControl(),
        email: new FormControl(),
        subject: new FormControl(),
        message: new FormControl()


    });

    onSubmit() {
        console.log(this.contactForm.value);
    }
}
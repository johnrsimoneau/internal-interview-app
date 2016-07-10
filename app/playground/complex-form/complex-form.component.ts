import { Component, OnInit } from '@angular/core';

import {
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
    AbstractControl
} from '@angular/forms';

import { LastNameInputComponent } from './last-name-input/last-name-input.component';

// functions for form validation
function firstNameValidator(control: FormControl): { [s:string]:boolean } {
    if(control.value.length < 2) {
        return { invalidFirstNameLength: true };
    }
}

@Component({
    moduleId: module.id,
    selector: 'complex-form',
    templateUrl: 'complex-form.component.html',
    directives: [
        FORM_DIRECTIVES,
        REACTIVE_FORM_DIRECTIVES,
        LastNameInputComponent
    ]
})
export class ComplexFormComponent implements OnInit {

    complexForm: FormGroup;
    firstName: AbstractControl;
    lastName: AbstractControl;

    clickedSubmit = false;

    constructor(fb: FormBuilder) {

        this.complexForm = fb.group({
            'firstName': ['', Validators.compose([
                firstNameValidator,
                Validators.required
            ])],
            'lastName': ['', Validators.required]
        });

        this.firstName = this.complexForm.controls['firstName'];
        this.lastName = this.complexForm.controls['lastName'];
        
    }

    onSubmit(form: any) {
        if (this.complexForm.valid) {
            console.log('You submitted ', form);
        } else {
            this.clickedSubmit = true;
            return;
        }
    }

    ngOnInit() { }

}
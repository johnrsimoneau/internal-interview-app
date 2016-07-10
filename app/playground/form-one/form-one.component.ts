import { Component, OnInit } from '@angular/core';
import {
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl
} from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'form-one',
    templateUrl: 'form-one.component.html',
    directives: [
        FORM_DIRECTIVES,
        REACTIVE_FORM_DIRECTIVES
    ]
})
export class FormOneComponent implements OnInit {

    myForm: FormGroup;
    // OPTIONAL, you would have to do this for each input.
    //sku: AbstractControl;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            'sku': ['', Validators.required]
        });
        // OPTIONAL, you would have to do this for each input
        //this.sku = this.myForm.controls['sku'];
    }

    onSubmit(form: any) {
        console.log('You submitted:', form);
    }

    ngOnInit() { }

}
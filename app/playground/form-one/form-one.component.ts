import { Component, OnInit } from '@angular/core';
import {
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
    FormBuilder,
    FormGroup
} from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'form-one',
    templateUrl: 'form-one.component.html',
    directives: [
        FORM_DIRECTIVES,
        REACTIVE_FORM_DIRECTIVES,
    ]
})
export class FormOneComponent implements OnInit {

    myForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            'sku': ['ABC123']
        });
    }

    onSubmit(form: any) {
        console.log('You submitted:', form);
    }
    
    ngOnInit() { }

}
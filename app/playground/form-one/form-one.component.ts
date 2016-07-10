import { Component } from '@angular/core';
import {
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
    AbstractControl
} from '@angular/forms';

// Custom validation
function skuValidator(control: FormControl): { [s:string]:boolean } {
    if (!control.value.match(/^123/)) {
        return { invalidSku: true};
    }
}

@Component({
    moduleId: module.id,
    selector: 'form-one',
    templateUrl: 'form-one.component.html',
    directives: [
        FORM_DIRECTIVES,
        REACTIVE_FORM_DIRECTIVES
    ]
})
export class FormOneComponent {

    myForm: FormGroup;
    sku: AbstractControl;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            'sku': ['', Validators.compose([
                Validators.required, skuValidator
            ])]
        });

        this.sku = this.myForm.controls['sku'];

        this.sku.valueChanges.subscribe(
            (value: string) => {
                console.log('sku changed to: ', value);
            }
        );

        this.myForm.valueChanges.subscribe(
            (form: any) => {
                console.log('form changed to ', form);
            }
        );
    }

    onSubmit(form: any) {
        console.log('You submitted:', form);
    }

}
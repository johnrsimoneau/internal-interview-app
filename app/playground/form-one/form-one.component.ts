import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'form-one',
    templateUrl: 'form-one.component.html'
})
export class FormOneComponent implements OnInit {
    
    onSubmit(form: any) {
        console.log('You submitted:', form);
    }

    constructor() { }

    ngOnInit() { }

}
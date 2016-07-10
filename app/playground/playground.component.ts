import { Component, OnInit } from '@angular/core';

import { FormOneComponent } from './example-form/form-one.component';
import { ComplexFormComponent } from './complex-form/complex-form.component';

@Component({
    moduleId: module.id,
    selector: 'playground',
    templateUrl: 'playground.component.html',
    directives: [
        FormOneComponent,
        ComplexFormComponent
    ]
})
export class PlaygroundComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
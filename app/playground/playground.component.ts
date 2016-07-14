import { Component, OnInit } from '@angular/core';

import { ParentComponent } from './parent/parent.component';
// import { FormOneComponent } from './example-form/form-one.component';
// import { ComplexFormComponent } from './complex-form/complex-form.component';

@Component({
    moduleId: module.id,
    selector: 'playground',
    templateUrl: 'playground.component.html',
    directives: [
        ParentComponent
    ]
})
export class PlaygroundComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
import { Component, OnInit } from '@angular/core';

import { FormOneComponent } from './example-form/form-one.component';

@Component({
    moduleId: module.id,
    selector: 'playground',
    templateUrl: 'playground.component.html',
    directives: [
        FormOneComponent
    ]
})
export class PlaygroundComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
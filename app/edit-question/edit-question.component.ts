import { Component, OnInit } from '@angular/core';
import {
    Router,
    ROUTER_DIRECTIVES,
    ActivatedRoute
} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'edit-question',
    templateUrl: 'edit-question.component.html'
})
export class EditQuestionComponent implements OnInit {
    id:string;

    constructor(private _route: ActivatedRoute) {
        _route.params
            .subscribe( params => { this.id = params['id']; });
    }

    ngOnInit() { }

}
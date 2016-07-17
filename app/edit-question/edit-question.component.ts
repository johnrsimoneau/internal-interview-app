import { Component, OnInit } from '@angular/core';
import {
    Router,
    ROUTER_DIRECTIVES,
    ActivatedRoute
} from '@angular/router';

import { EditQuestionService } from './../services/edit-question.service';

@Component({
    moduleId: module.id,
    selector: 'edit-question',
    templateUrl: 'edit-question.component.html'
})
export class EditQuestionComponent implements OnInit {
    id:string;
    questionDetail: any[];

    constructor(
        private _route: ActivatedRoute, 
        private _editQuestionService: EditQuestionService ) {

        _route.params
            .subscribe( params => { this.id = params['id']; });
    }

    ngOnInit() {
        let id = this._route.snapshot.params['id'];
        this._editQuestionService.getQuestionToEdit(id)
            .subscribe(
                (questionDetail) => this.questionDetail = questionDetail,
                (err) => { console.log(err) ;}
            )
    }

}
import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

import { QuestionService } from './../manage-questions/services/question.service';

@Component({
    moduleId: module.id,
    selector: 'question-list',
    templateUrl: 'question-list.component.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES]
})
export class QuestionListComponent implements OnInit {
    questions: any[];

    constructor(private _questionService: QuestionService) { }

    ngOnInit() { 
        this._questionService.getQuestions()
            .subscribe(
                (questions) => this.questions = questions,
                (err) => { console.log(err); }
            );
    }

}
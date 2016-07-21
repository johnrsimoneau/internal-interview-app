import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

import { SearchQuestionsComponent } from './../question-search/search.component';
import { QuestionService } from './../services/question.service';

@Component({
    moduleId: module.id,
    selector: 'question-list',
    templateUrl: 'question-list.component.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, SearchQuestionsComponent]
})
export class QuestionListComponent implements OnInit {
    questions: any[];
    public isSearching = false;

    constructor(private _questionService: QuestionService) { }

    manageQuestionSearchEvent(event: any) {
        this.isSearching = event.value;
        console.log(this.isSearching);
    }

    removeQuestion(id:string) {
        this._questionService.deleteQuestion(id);
    }

    ngOnInit() { 
        this._questionService.getQuestions()
            .subscribe(
                (questions) => this.questions = questions,
                (err) => { console.log(err); }
            );
    }

}
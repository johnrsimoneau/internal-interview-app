import { Component, OnInit, ApplicationRef } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

import { SearchQuestionsComponent } from './../search/search.component';
import { QuestionService } from './../services/question.service';

@Component({
    moduleId: module.id,
    selector: 'existing-questions',
    templateUrl: 'existing-questions.component.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, SearchQuestionsComponent]
})
export class QuestionListComponent implements OnInit {
    pageTitle: string = "Existing Questions";
    pageSubTitle: string;
    public searchName = "questions";
    public questions: any;
    noResults: boolean;

    constructor(private _questionService: QuestionService, private _applicationRef: ApplicationRef ) { }

    manageSearchEvent(event: any) {
        this.pageSubTitle = "Search Results";
        this.questions = event.value;
        if (this.questions == undefined) {
            this.noResults = true;
        } else if (this.questions == "cleared") {
            this.questions = undefined;
            this.noResults = null;
            this.getQuestions();
        }
    }

    getQuestions() {
        this.pageSubTitle = "All Available Questions";
        this._questionService.getQuestions().subscribe((questions) => {
            this.questions = questions;
        }, (err) => { console.log(err); }
        );
    }

    ngOnInit() {
        this.getQuestions();
    }

}
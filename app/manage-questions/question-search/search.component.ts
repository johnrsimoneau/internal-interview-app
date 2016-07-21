import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { QuestionService } from './../services/question.service';

@Component({
    moduleId: module.id,
    selector: 'search-questions',
    templateUrl: 'search.component.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES ]
})
export class SearchQuestionsComponent implements OnInit {
    @Output() searchingEventChange = new EventEmitter();
    noResults: boolean;
    availableQuestions: Array<any>;

    constructor(private _questionService: QuestionService) { }

    clearQuestionSearchResults() {
        this.availableQuestions = [];
        this.searchingEventChange.emit({
            value: false
        })
    }

    searchQuestions(term: string) {
        this.searchingEventChange.emit({
            value: true
        })
        this.noResults = false;
        if (!term.length) {
            this.availableQuestions = Array<string>();
        } else {
            this._questionService
                .getQuestionsBySearchTerm(term)
                .filter(text => term.length >= 2)
                .debounceTime(400)
                .distinctUntilChanged()
                .subscribe(
                    availableQuestions => {
                        if (availableQuestions.length) {
                            this.availableQuestions = availableQuestions;
                        } else {
                            this.noResults = true;
                        }
                    }
                )
        }
    }

    ngOnInit() { }

}
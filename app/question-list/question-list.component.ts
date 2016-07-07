import { Component, OnInit } from '@angular/core';
import { QuestionListService } from './question-list.service';

@Component({
    moduleId: module.id,
    selector: 'question-list',
    templateUrl: 'question-list.component.html'
})
export class QuestionListComponent implements OnInit {
    questions: any[];

    constructor(private _questionListService: QuestionListService) { }

    ngOnInit() { 
        this._questionListService.getQuestions()
            .subscribe(
                (questions) => this.questions = questions,
                (err) => { console.log(err); }
            );
    }

}
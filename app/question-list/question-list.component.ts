import { Component, OnInit } from '@angular/core';
import { QuestionService } from './../services/question.service';

@Component({
    moduleId: module.id,
    selector: 'question-list',
    templateUrl: 'question-list.component.html'
})
export class QuestionListComponent implements OnInit {
    questions: any[];

    constructor(private _questionService: QuestionService) { }

    editQuestion(value:any) {
        console.log(value);
    }

    ngOnInit() { 
        this._questionService.getQuestions()
            .subscribe(
                (questions) => this.questions = questions,
                (err) => { console.log(err); }
            );
    }

}
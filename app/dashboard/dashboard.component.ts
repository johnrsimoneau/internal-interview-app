import { Component, OnInit } from '@angular/core';

import { CreateQuestionComponent } from './../create-question/create-question.component';
import { QuestionListComponent } from './../question-list/question-list.component';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    directives: [
        CreateQuestionComponent,
        QuestionListComponent
    ]
})
export class DashboardComponent implements OnInit {
    
    viewMode = 'question-list';
    constructor() { }

    ngOnInit() { }

}
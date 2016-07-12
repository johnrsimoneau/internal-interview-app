import { Component, OnInit } from '@angular/core';

import { CreateQuestionComponent } from './../create-question/create-question.component';
import { QuestionListComponent } from './../question-list/question-list.component';
import { PlaygroundComponent } from './../playground/playground.component';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    directives: [
        CreateQuestionComponent,
        QuestionListComponent,
        PlaygroundComponent
    ]
})
export class DashboardComponent implements OnInit {
    
    viewMode = 'create-question';
    constructor() { }

    ngOnInit() { }

}
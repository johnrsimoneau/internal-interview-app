import { Component, OnInit } from '@angular/core';

import { QuestionComponent } from './../manage-questions/question.component';
import { QuestionListComponent } from './../question-list/question-list.component';
import { PlaygroundComponent } from './../playground/playground.component';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    directives: [
        QuestionComponent,
        QuestionListComponent,
        PlaygroundComponent
    ]
})
export class DashboardComponent implements OnInit {
    
    viewMode = 'question';
    constructor() { }

    ngOnInit() { }

}
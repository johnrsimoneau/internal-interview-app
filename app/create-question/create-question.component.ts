import { Component, OnInit } from '@angular/core';

import { AcceptableAnswersComponent } from './acceptable-answers/acceptable-answers.component';
import { TagsComponent } from './tags/tags.component';

@Component({
    moduleId: module.id,
    selector: 'create-question',
    templateUrl: 'create-question.component.html',
    directives: [
        AcceptableAnswersComponent,
        TagsComponent
    ]
})
export class CreateQuestionComponent implements OnInit {
    listOfAnswers: string[] = [];
    listOfTags: string[] = [];
    levels = [
            'Associate',
            'Staff',
            'Senior',
            'Principal'
        ];

    constructor() { }

    ngOnInit() { }

}
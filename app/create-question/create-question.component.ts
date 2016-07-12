import { Component, OnInit } from '@angular/core';

import { AcceptableAnswersComponent } from './acceptable-answers/acceptable-answers.component';
import { TagsComponent } from './tags/tags.component';

import { TagService } from './tags/tag.service';

import { QuestionModel } from './question.model';

@Component({
    moduleId: module.id,
    selector: 'create-question',
    templateUrl: 'create-question.component.html',
    directives: [
        AcceptableAnswersComponent,
        TagsComponent
    ],
    providers: [
        TagService
    ]
})
export class CreateQuestionComponent implements OnInit {

    submitted = false;
    dateCreated:any;
    listOfAnswers: string[] = [];
    selectedTags: any[];
    levels = [
        'Associate',
        'Staff',
        'Senior',
        'Principal'
    ];

    model = new QuestionModel(
        'What is your age?',
        this.levels[2],
        this.selectedTags = [
            {"_id": "124", "tag": "angular", "count": 2},
            {"_id": "345", "tag": "javascript", "count": 3}
        ],
        'Some age',
        ['Another age', 'One more age', 'another age'],
        'ACME',
        null
    );

    onSubmit() {
        this.submitted = true;
    }

    constructor() { }

    ngOnInit() { }

    // Remove this when done creating the form
    get diagnostic() { return JSON.stringify(this.model); }

}
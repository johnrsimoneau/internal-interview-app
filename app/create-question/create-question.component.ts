import { Component, OnInit } from '@angular/core';

import { AcceptableAnswersComponent } from './acceptable-answers/acceptable-answers.component';
import { PreferredAnswerComponent } from './acceptable-answers/preferred-answer.component';
import { TagsComponent } from './tags/tags.component';

import { TagService } from './tags/tag.service';

import { QuestionModel } from './question.model';

@Component({
    moduleId: module.id,
    selector: 'create-question',
    templateUrl: 'create-question.component.html',
    directives: [
        PreferredAnswerComponent,
        AcceptableAnswersComponent,
        TagsComponent
    ],
    providers: [
        TagService,
        QuestionModel
    ]
})
export class CreateQuestionComponent implements OnInit {

    submitted = false;

    model = new QuestionModel(
        'What is your age?',
        ['something', 'another'],
        'Some age',
        ['Another age', 'One more age', 'another age'],
        'ACME',
        null
    );

    onSubmit() {
        this.submitted = true;
    }

    dateCreated:any;
    listOfAnswers: string[] = [];
    selectedTags: string[] = [];
    levels = [
        'Associate',
        'Staff',
        'Senior',
        'Principal'
    ];

    constructor() { }

    ngOnInit() { }

    // Remove this when done creating the form
    get diagnostic() { return JSON.stringify(this.model); }

}
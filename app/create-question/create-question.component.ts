import { Component, OnInit } from '@angular/core';

import { AcceptableAnswersComponent } from './acceptable-answers/acceptable-answers.component';
import { TagsComponent } from './tags/tags.component';

import { TagService } from './tags/tag.service';

// import { QuestionModel } from './question.model';

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
    public otherAcceptableAnswers: any[];
    public selectedTags: any[];

    enteredAnswers: string[];
    enteredTags: any[];

    manageAcceptableAnswers(event: any) {
        this.otherAcceptableAnswers = event.value;
        this.enteredAnswers = this.otherAcceptableAnswers;
    }

    manageSelectedTags(event: any) {
        this.selectedTags = event.value;
        this.enteredTags = this.selectedTags;
    }

    removeAnswer(value: string) {
        var index = this.otherAcceptableAnswers.indexOf(value);
        this.otherAcceptableAnswers.splice(index, 1);
    }

    submitted = false;
    dateCreated:any;

    levels = [
        'Associate',
        'Staff',
        'Senior',
        'Principal'
    ];

/*
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
*/
    onSubmit() {
        this.submitted = true;
    }

    constructor() { }

    ngOnInit() { }



}
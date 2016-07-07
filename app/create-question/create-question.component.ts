import { Component, OnInit } from '@angular/core';

import { AcceptableAnswersComponent } from './acceptable-answers/acceptable-answers.component';
import { TagsComponent } from './tags/tags.component';

import { TagService } from './tags/tag.service';

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

}
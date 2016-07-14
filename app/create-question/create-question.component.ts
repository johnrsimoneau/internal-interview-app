import { Component, OnInit } from '@angular/core';
import {
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
    FormBuilder,
    FormControl,
    FormGroup,
    AbstractControl,
    Validators
} from '@angular/forms';

import { AcceptableAnswersComponent } from './acceptable-answers/acceptable-answers.component';
import { TagsComponent } from './tags/tags.component';

import { TagService } from './tags/tag.service';

// import { QuestionModel } from './question.model';

@Component({
    moduleId: module.id,
    selector: 'create-question',
    templateUrl: 'create-question.component.html',
    directives: [
        FORM_DIRECTIVES,
        REACTIVE_FORM_DIRECTIVES,
        AcceptableAnswersComponent,
        TagsComponent
    ],
    providers: [
        TagService
    ]
})
export class CreateQuestionComponent implements OnInit {
    dateCreated = new Date();
    questionForm: FormGroup;

    clickedSubmit = false;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.questionForm = this.fb.group({
            dateCreated: [],
            text: ['', Validators.required],
            tech: ['', Validators.required],
            company: [],
            level: ['', Validators.required],
            tags: ['', Validators.required],
            preferredAnswers: ['', Validators.required],
            answers: [],
        });
    }

    public otherAcceptableAnswers: any[];
    public selectedTags: any[];

    enteredAnswers: string[];
    enteredTags: any[] = [];

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

    levels = [
        'Associate',
        'Staff',
        'Senior',
        'Principal'
    ];

    onSubmit(form: any) {
        if (this.questionForm.valid) {
            console.log('You submitted ', form);
        } else {
            console.log('errors');
            this.clickedSubmit = true;
            return;
        }
    }
}
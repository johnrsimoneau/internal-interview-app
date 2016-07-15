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

import { AnswersComponent } from './answers/answers.component';
import { TagsComponent } from './tags/tags.component';

import { TagService } from './tags/tag.service';
import { QuestionService } from './../services/question.service';

@Component({
    moduleId: module.id,
    selector: 'create-question',
    templateUrl: 'create-question.component.html',
    directives: [
        FORM_DIRECTIVES,
        REACTIVE_FORM_DIRECTIVES,
        AnswersComponent,
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

    constructor(private fb: FormBuilder, private _questionService: QuestionService) { }

    ngOnInit() {
        this.questionForm = this.fb.group({
            createdAt: [],
            text: ['', Validators.required],
            tech: ['', Validators.required],
            level: ['', Validators.required],
            tags: ['', Validators.required],
            answers: [],
        });
    }

    public answers: any[] = [];
    public selectedTags: any[];

    enteredAnswers: string[] = [];
    enteredTags: any[] = [];

    manageAnswersChange(event:any) {
        this.answers = event.value;
        this.enteredAnswers = this.answers;
        console.log(this.answers);
    }

    manageSelectedTags(event: any) {
        this.selectedTags = event.value;
        this.enteredTags = this.selectedTags;
    }

    levels = [
        'Associate',
        'Staff',
        'Senior',
        'Principal'
    ];

    onSubmit(form: any) {
        if (this.questionForm.valid) {
            console.log(form);
            console.log('You submitted ', form);
            this._questionService.postQuestion(form);
        } else {
            console.log('errors');
            this.clickedSubmit = true;
            return;
        }
    }
}
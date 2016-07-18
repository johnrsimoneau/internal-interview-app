import { Component, OnInit } from '@angular/core';

import {
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';

import {
    Router,
    ROUTER_DIRECTIVES,
    ActivatedRoute
} from '@angular/router';

// Models
import { QuestionModel } from './../models/question.model';

// Services
import { TagService } from './tags/tag.service';
import { QuestionService } from './../services/question.service';

// Child Components
import { AnswersComponent } from './answers/answers.component';
import { TagsComponent } from './tags/tags.component';

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
    id: string;
    title: string;
    questionModel = new QuestionModel();
    dateCreated = new Date();
    questionForm: FormGroup;
    clickedSubmit = false;

    constructor( private _route: ActivatedRoute,
        private fb: FormBuilder, 
        private _questionService: QuestionService) { 
            _route.params
                .subscribe( params => { this.id = params['id']; });
    }

    ngOnInit() {

        // Form Builder
        this.questionForm = this.fb.group({
            createdAt: [],
            text: ['', Validators.required],
            tech: ['', Validators.required],
            level: ['', Validators.required],
            tags: ['', Validators.required],
            answers: [],
        });

        let id = this._route.snapshot.params['id'];
        this.title = id ? "Edit Question" : "Create Question";
        
        if (!id) {
            return
        }

        this._questionService.getQuestionToEdit(id)
            .subscribe(
                // questionModel => this.questionModel = questionModel,
                response => {
                    if (response.status == 404) {
                        // TODO: navigate to another page, set up the route.
                        console.log("Question not found");
                    }
                }
            )
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
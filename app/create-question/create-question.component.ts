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
    id: string;
    title: string;
    dateCreated = new Date();
    questionForm: FormGroup;
    questionDetail: any;
    clickedSubmit = false;

    constructor(private fb: FormBuilder, 
        private _questionService: QuestionService,
        private _route: ActivatedRoute) {
            _route.params
                .subscribe( params => { this.id = params['id']; });


            
        }

    ngOnInit() {

        if (!this.id) {
            return;
        }

        this.title = this.id ? "Edit Question" : "Create Question";

        this.questionForm = this.fb.group({
            'createdAt': [],
            'text': ['', Validators.required],
            'tech': ['', Validators.required],
            'level': ['', Validators.required],
            'tags': ['', Validators.required],
            'answers': [],
        }); 
        
        this._questionService.getQuestionToEdit(this.id)
            .subscribe(
                (questionDetail) => this.questionDetail = questionDetail,
                (err) => { console.log(err) ;}
            )

            this.questionForm.controls['text'].valueChanges
            .subscribe((value) => {
                value.text = this.questionDetail.text
            })

        // this.questionForm.controls['text'].valueChanges.subscribe(
        //     (value: string) => this.questionForm.controls['text'] = this.questionDetail.text
        // )
    
        // this.questionForm({'text': [this.questionDetail.text]});
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
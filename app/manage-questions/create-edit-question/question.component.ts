import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormBuilder, FormControl, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

import { AnswersComponent } from './answers/answers.component';
import { TagsComponent } from './tags/tags.component';

import { TagService } from './tags/tag.service';
import { QuestionService } from './../services/question.service';

@Component({
    moduleId: module.id,
    selector: 'question',
    templateUrl: 'question.component.html',
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
export class QuestionComponent implements OnInit {
    id: string;
    title: string;
    buttonTitle: string;
    levels = [ 'Associate', 'Staff', 'Senior', 'Principal' ];
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

    public answers: any[] = [];
    public tags: any[];

    enteredAnswers: string[] = [];
    enteredTags: any[] = [];

    manageAnswersChange(event:any) {
        this.answers = event.value;
        this.enteredAnswers = this.answers;
    }

    manageSelectedTags(event: any) {
        this.tags = event.value;
        this.enteredTags = this.tags;
    }

    onSubmit(form: any) {
        if( !this.id ) {
            if (this.questionForm.valid) {
                this._questionService.postQuestion(form);
            } else {
                this.clickedSubmit = true;
                return;
            }
        } else {
             if (this.questionForm.valid) {
                this._questionService.putQuestion(this.id, form);
            } else {
                this.clickedSubmit = true;
                return;
            }
        }
    }

    ngOnInit() {

        this.title = this.id ? "Edit Question" : "Create Question";
        this.buttonTitle = this.id ? "Save Changes" : "Submit Question";

        this.questionForm = this.fb.group({
            createdAt: [],
            text: ['', Validators.required],
            tech: ['', Validators.required],
            level: ['', Validators.required],
            tags: ['', Validators.required],
            answers: []
        }); 

        if (!this.id) {
            return;
        }

        this._questionService.getQuestionToEdit(this.id)
            .subscribe(
                (questionFromApi) => { this.questionDetail = questionFromApi;
                    // Text
                    (<FormControl>this.questionForm.controls['text']).updateValue(this.questionDetail[0].text);
                    (<FormControl>this.questionForm.controls['text']).updateValueAndValidity();

                    // Tech
                    (<FormControl>this.questionForm.controls['tech']).updateValue(this.questionDetail[0].tech);
                    (<FormControl>this.questionForm.controls['tech']).updateValueAndValidity();     

                    // Level
                    (<FormControl>this.questionForm.controls['level']).updateValue(this.questionDetail[0].level);
                    (<FormControl>this.questionForm.controls['level']).updateValueAndValidity();

                    // Tags
                    (<FormControl>this.questionForm.controls['tags']).updateValue(this.questionDetail[0].tags);
                    (<FormControl>this.questionForm.controls['tags']).updateValueAndValidity();
                    this.tags = this.questionDetail[0].tags;

                    // Answers
                    (<FormControl>this.questionForm.controls['answers']).updateValue(this.questionDetail[0].answers);
                    (<FormControl>this.questionForm.controls['answers']).updateValueAndValidity();
                    this.answers = this.questionDetail[0].answers;
                },
                (err:any) => console.log(err));
    }
}
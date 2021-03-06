import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormBuilder, FormControl, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

import { ConfirmationComponent } from './../confirmation/confirmation.component';
import { AnswersComponent } from './answers/answers.component';
import { TagComponent } from './../tag/tag.component';

import { TagService } from './../tag/tag.service';
import { QuestionService } from './../services/question.service';
import { ConfirmationService, ConfirmationModel } from './../confirmation/confirmation.service';

@Component({
    moduleId: module.id,
    selector: 'question',
    templateUrl: 'question.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        FORM_DIRECTIVES,
        REACTIVE_FORM_DIRECTIVES,
        AnswersComponent,
        ConfirmationComponent,
        TagComponent
    ]
})
export class QuestionComponent implements OnInit {
    id: string;
    public showConfirmation: boolean;
    tagName = "questionTags";
    selectedTags: string[];
    canDelete: boolean;
    pageTitle: string;
    buttonTitle: string;
    levels = [ 'Associate', 'Staff', 'Senior', 'Principal' ];
    dateCreated = new Date();
    questionForm: FormGroup;
    questionDetail: any;
    clickedSubmit = false;
    selectedTagsFromServer: any = '';

    constructor(private fb: FormBuilder, 
        private _questionService: QuestionService,
        private _confirmationService: ConfirmationService,
        private _confirmationModel: ConfirmationModel,
        private _router: Router,
        private _activatedRoute: ActivatedRoute) {
            _activatedRoute.params
                .subscribe( params => { this.id = params['id']; });  
    }

    public answers: any[] = [];

    enteredAnswers: string[] = [];

    manageAnswersChange(event:any) {
        this.answers = event.value;
        this.enteredAnswers = this.answers;
    }

    manageSelectedTags(event: any) {
        this.selectedTags = event.value;
    }

    canDeleteContent(event: any) {
        this.canDelete = event.value;
        this.showConfirmation = false;
        if ( this.canDelete ) {
            this._questionService.deleteQuestion(this.id);
            this._router.navigate(['./existing-questions']);
        }
    }

    deleteItem() {
        this.showConfirmation = true;
        this._confirmationModel.title = "Are you sure you want to delete this question?";
        this._confirmationModel.message = "WARNING! Once deleted, this question cannot be retrived. Are you sure you want to continue?";
        this._confirmationModel.actionBtnTitle = "Yes, Delete Question";
        this._confirmationModel.closeBtnTitle = "No, Don't Delete Question";
        this._confirmationModel.showOkayBtn = false;
        this._confirmationService.displayConfirmation(this._confirmationModel);
    }

    onSubmit(form: any) {
        if( !this.id ) {
            if (this.questionForm.valid) {
                this._questionService.postQuestion(form);
                this._router.navigate(['./existing-questions']);
                window.location.reload();
            } else {
                this.clickedSubmit = true;
                return;
            }
        } else {
             if (this.questionForm.valid) {
                this._questionService.putQuestion(this.id, form);
                this._router.navigate(['./existing-questions']);
                window.location.reload();
            } else {
                this.clickedSubmit = true;
                return;
            }
        }
    }

    ngOnInit() {
        this.pageTitle = this.id ? "Edit Question" : "Create Question";
        this.buttonTitle = this.id ? "Save Changes" : "Submit Question";

        this.questionForm = this.fb.group({
            createdAt: [],
            text: ['', Validators.required],
            tech: ['', Validators.required],
            level: ['', Validators.required],
            tags: ['', Validators.required],
            answers: []
        }); 
        this.id ? this.selectedTagsFromServer = this.selectedTags : this.selectedTagsFromServer = '';
        if (!this.id) { return; }

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
                    this.selectedTags = this.questionDetail[0].tags;
                    // Answers
                    (<FormControl>this.questionForm.controls['answers']).updateValue(this.questionDetail[0].answers);
                    (<FormControl>this.questionForm.controls['answers']).updateValueAndValidity();
                    this.answers = this.questionDetail[0].answers;
                },
                (err:any) => console.log(err));
    }
}
import { provide, Component } from '@angular/core';
import { ROUTER_DIRECTIVES, provideRouter, RouterConfig } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { QuestionService } from './manage-questions/services/question.service';

@Component({
    selector: 'interview-app',
    template: `
        <div class="navbar navbar-inverse">
            <div class="container">
                <ul class="nav navbar-nav">
                    <li><a [routerLink]="['question-list']">Questions</a></li>
                    <li><a [routerLink]="['question']">Create Question</a></li>
                    <li><a [routerLink]="['playground']">Playground</a></li>
                </ul>
            </div>
        </div>
        
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h1 class="page-header">{{title}}</h1>
                </div>
            </div>
        </div>

        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        QuestionService
    ]
})
export class AppComponent { 
    title: string = "Interview App";
}
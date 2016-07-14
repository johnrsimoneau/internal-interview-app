import { provide, Component } from '@angular/core';
import {
    ROUTER_DIRECTIVES,
    provideRouter,
    RouterConfig
} from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Observable } from 'rxjs/Rx';

import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionListService } from './question-list/question-list.service';

@Component({
    selector: 'interview-app',
    template: `
        <div class="row">
            <div class="col-sm-12">
                <h1 class="page-header">{{title}}</h1>
            </div>
        </div>
        <div class="nav">
            <ul>
                <li><a [routerLink]="['question-list']">Questions</a></li>
                <li><a [routerLink]="['create-question']">Create Question</a></li>
                <li><a [routerLink]="['playground']">Playground</a></li>
            </ul>
        </div>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [QuestionListService]
})
export class AppComponent { 
    title: string = "Interview App";
}
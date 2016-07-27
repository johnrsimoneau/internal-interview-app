import { provide, Component } from '@angular/core';
import { ROUTER_DIRECTIVES, provideRouter, RouterConfig } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Observable } from 'rxjs/Rx';

import { QuestionService } from './services/question.service';
import { SearchService } from './search/search.service';
import { ConfirmationService, ConfirmationModel } from './confirmation/confirmation.service';

@Component({
    selector: 'interview-app',
    template: `
        <div class="navbar navbar-inverse">
            <div class="container">
                <ul class="nav navbar-nav">
                    <li><a [routerLink]="['existing-questions']">Questions</a></li>
                    <li><a [routerLink]="['playground']">Playground</a></li>
                </ul>
            </div>
        </div>
    
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        QuestionService,
        SearchService,
        ConfirmationService,
        ConfirmationModel
    ]
})
export class AppComponent { }
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { DashboardComponent } from './dashboard/dashboard.component';

import { QuestionListService } from './question-list/question-list.service';

@Component({
    selector: 'interview-app',
    template: `
        <div class="row">
            <div class="col-sm-12">
                <h1>{{title}}</h1>
            </div>
        </div>
        <dashboard></dashboard>
    `,
    directives: [DashboardComponent],
    providers: [QuestionListService]
})
export class AppComponent { 
    title: string = "Cardinal Solutions Interview App";
}

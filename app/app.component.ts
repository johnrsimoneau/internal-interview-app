import { Component } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';

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
    directives: [DashboardComponent]
})
export class AppComponent { 
    title: string = "Cardinal Solutions Interview App";
}

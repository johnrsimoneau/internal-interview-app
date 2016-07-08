import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'acceptable-answers',
    templateUrl: 'acceptable-answers.component.html'
})
export class AcceptableAnswersComponent implements OnInit {
    @Input() listOfAnswers:string[] = [];

    addAnswer(value: string) {
        this.listOfAnswers.push(value);
        console.log(this.listOfAnswers)
    }

    removeAnswer(value: string) {
        var index = this.listOfAnswers.indexOf(value);
        this.listOfAnswers.splice(index, 1);
    }

    constructor() { }

    ngOnInit() { }

}
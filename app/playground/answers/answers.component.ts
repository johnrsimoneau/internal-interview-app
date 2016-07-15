import { Component, OnInit } from '@angular/core';

export class AnswersModel {
    answer: string;
    isPreferred: boolean;
}

@Component({
    moduleId: module.id,
    selector: 'answers',
    templateUrl: 'answers.component.html'
})
export class AnswersComponent implements OnInit {
    
    makeAnotherAnswerClicked:Boolean = false;
    allAnswers:any[] = [];

    constructor() { }

    ngOnInit() { }

    private _testIfPreferred():number {
        var findIndex:number;
        for (var i = 0; i < this.allAnswers.length; i++) { 
            if ( this.allAnswers[i].preferred == true ) {
                findIndex = i;
            } 
        }
        return findIndex >= 0 ? findIndex : -1;
    }

    createAnswer(answerValue:string, preferred:boolean) {
        var object = { answerValue, preferred };
        this.allAnswers.push(object);
    }

    removeAnswer(index:number) {
        var indexOfAnswer = this.allAnswers.indexOf(index);
        this.allAnswers.splice(index, 1);
    }

    updatePreferred(index:number) {
        var foundIndex:number = this._testIfPreferred();

        if (foundIndex != -1) {
            this.allAnswers[foundIndex].preferred = false;
        } 
        this.allAnswers[index].preferred = true;
    }

    updateArrayText(index:number, value: string) {
        this.allAnswers[index].answerValue = value;
    }
}
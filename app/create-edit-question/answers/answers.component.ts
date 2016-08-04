import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'answers',
    templateUrl: 'answers.component.html'
})
export class AnswersComponent implements OnInit{
    
    @Input() allAnswersArray:any[] = [];
    @Output() manageAnswersChange = new EventEmitter();

    ngOnInit() {
        if (this.allAnswersArray.length == 0) {
            this.allAnswersArray.push({'text': '', 'preferred': false });
        }
    }

    private _testIfPreferred():number {
        var findIndex:number;
        for (var i = 0; i < this.allAnswersArray.length; i++) { 
            if ( this.allAnswersArray[i].preferred == true ) {
                findIndex = i;
            } 
        }
        return findIndex >= 0 ? findIndex : -1;
    }

    createAnswer() {
        this.allAnswersArray.push({ 'text': '', 'preferred': false });
        this.manageAnswersChange.emit({
            value: this.allAnswersArray
        });
    }

    updatePreferred(index:number) {
        var foundIndex:number = this._testIfPreferred();

        if (foundIndex != -1) {
            this.allAnswersArray[foundIndex].preferred = false;
            this.manageAnswersChange.emit({
                value: this.allAnswersArray
            })
        } 
        this.allAnswersArray[index].preferred = true;
        this.manageAnswersChange.emit({
            value: this.allAnswersArray
        })
    }

    updateArrayText(index:number, value: string) {
        this.allAnswersArray[index].text = value;
        this.manageAnswersChange.emit({
            value: this.allAnswersArray
        })
    }

    removeAnswer(index:number) {
        var indexOfAnswer = this.allAnswersArray.indexOf(index);
        this.allAnswersArray.splice(index, 1);
        this.manageAnswersChange.emit({
            value: this.allAnswersArray
        })
    }
}
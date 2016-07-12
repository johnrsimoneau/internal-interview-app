import { 
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'acceptable-answers',
    templateUrl: 'acceptable-answers.component.html'
})
export class AcceptableAnswersComponent {
    @Input() otherAcceptableAnswers:string[] = [];
    @Output() acceptableAnswersChange = new EventEmitter();

    addAnswer(value: string) {
        this.otherAcceptableAnswers.push(value.slice(0, -1));
        this.acceptableAnswersChange.emit({
            value: this.otherAcceptableAnswers
        })
    }

}
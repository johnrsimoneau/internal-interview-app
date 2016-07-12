import { 
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'child',
    template: `
        <h5>Child Component</h5>
        <button (click)="addTag()">Add</button>
        <button (click)="removeTag()">Remove</button>
    `
})
export class ChildComponent {
    @Input() sharedTagsArray:string[] = [];
    @Output() selectedTagsChange = new EventEmitter();

    addTag() {
        this.sharedTagsArray.push('something');
        this.selectedTagsChange.emit({
            value: this.sharedTagsArray
        })
    }

    removeTag() {
        this.sharedTagsArray.shift();
        this.selectedTagsChange.emit({
            value: this.sharedTagsArray
        });
    }
}
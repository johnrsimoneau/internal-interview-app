import { Component } from '@angular/core';

import { ChildComponent } from './child/child.component';

@Component({
    moduleId: module.id,
    selector: 'parent',
    template: `
        <h4>Parent Component</h4>
        <child 
            [sharedTagsArray]="selectedTags"
            (selectedTagsChange)="manageTagArray($event);">
        </child>
    `,
    directives: [ChildComponent]
})
export class ParentComponent {
    public selectedTags:string[] = [];
    manageTagArray(event:any) {
        this.selectedTags = event.value;
        console.log(this.selectedTags);
    }
}
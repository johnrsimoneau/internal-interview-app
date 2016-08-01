import { Component, OnInit } from '@angular/core';

// import { ParentComponent } from './parent/parent.component';
import { TagComponent } from './tag/tag.component';

import { TagService } from './tag/tag.service';


// import { FormOneComponent } from './example-form/form-one.component';
// import { ComplexFormComponent } from './complex-form/complex-form.component';

@Component({
    moduleId: module.id,
    selector: 'playground',
    templateUrl: 'playground.component.html',
    directives: [
        TagComponent
        //ParentComponent
    ],
    providers: [TagService]
})
export class PlaygroundComponent implements OnInit {
    tagName = "questionTags";
    selectedTags: string[] = [];
    manageSelectedTags(event:any) {
        this.selectedTags = event.value;
    }
    constructor() { }

    ngOnInit() { }

}
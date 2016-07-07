import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'tags',
    templateUrl: 'tags.component.html'
})
export class TagsComponent implements OnInit {

    @Input() listOfTags:string[] = [];

    addTag(value: string) {
        this.listOfTags.push(value);
    }

    removeTag(value: string) {
        var index = this.listOfTags.indexOf(value);
        this.listOfTags.splice(index, 1);
    }

    constructor() { }

    ngOnInit() { }

}
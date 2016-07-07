import { Component, OnInit, Input } from '@angular/core';

import { TagService } from './tag.service';

@Component({
    moduleId: module.id,
    selector: 'tags',
    templateUrl: 'tags.component.html'
})
export class TagsComponent implements OnInit {

    @Input() listOfTags:string[] = [];

    availableTags: any[];

    addTag(value: string) {
        this.listOfTags.push(value);
    }

    editTag(value: string) {
        var index = this.listOfTags.indexOf(value);
        this.listOfTags.splice(index, 1);
    }

    removeTag(value: string) {
        var index = this.listOfTags.indexOf(value);
        this.listOfTags.splice(index, 1);
        
    }

    constructor(private _tagService: TagService) { }

    ngOnInit() {
        this._tagService.getTags()
            .subscribe(
                (availableTags) => this.availableTags = availableTags,
                (err) => { console.log(err); }
            )
    }

}
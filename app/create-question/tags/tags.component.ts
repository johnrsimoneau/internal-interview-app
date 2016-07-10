import { Component, OnInit, Input } from '@angular/core';

import { TagService } from './tag.service';

@Component({
    moduleId: module.id,
    selector: 'tags',
    templateUrl: 'tags.component.html'
})
export class TagsComponent implements OnInit {

    @Input() selectedTags:string[] = [];

    availableTags: any[];

    addTag(id:string, tag:string, count:number ) {
        var object:any = {"_id": id, "tag": tag, "count": count };
        this.selectedTags.push(object);
    }

    removeTag(value: string) {
        var index = this.selectedTags.indexOf(value);
        this.selectedTags.splice(index, 1);
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
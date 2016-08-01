import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { TagService } from './tag.service';

@Component({
    moduleId: module.id,
    selector: 'tags',
    templateUrl: 'tags.component.html'
})
export class TagsComponent {
    @Input() tagType: string;
    @Output() tagEvent = new EventEmitter();
    availableTags: any;
    selectedTags: string[];
    noResults: boolean;

    constructor( private _tagService: TagService ) { }

    searchTags(term: string) {
        this.noResults = false;
        if (!term.length) {
            this.availableTags = Array<string>();
            return;
        }

        this._tagService
            .searchTags(term, this.tagType)
            .filter(text => term.length >= 2)
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe(
                availableTags => {
                    if (availableTags.length) {
                        this.availableTags = availableTags  
                    } else {
                        this.noResults = true;
                    }
                }
            );
    }

    addNewTag(term: string) {
        this.addToSelectedTags(term);
    }

    addToSelectedTags(tag:string) {
        this.selectedTags.push(tag);
        this.tagEvent.emit({
            value: tag
        });
    }

    removeTag(value: string) {
        var indexOfTag = this.selectedTags.indexOf(value);
        this.selectedTags.splice(indexOfTag, 1);
        this.tagEvent.emit({
            value: this.selectedTags
        });
    }

}
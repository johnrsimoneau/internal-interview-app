import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { TagService } from './tag.service';

@Component({
    moduleId: module.id,
    selector: 'tags',
    templateUrl: 'tags.component.html'
})
export class TagsComponent implements OnInit {
    availableTags: Array<string>;
    noResults: boolean = false;

    @Input() selectedTags:any[] = [];

    constructor(private _tagService: TagService) { }

    searchTags(term: string) {
        this.noResults = false;
        if (!term.length) {
            this.availableTags = Array<string>()
        } else {

            this._tagService
                .searchTags(term)
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
                )
            
        }
    }
    addTag(id:string, tag:string, count:number ) {
        var object:any = {"_id": id, "tag": tag, "count": count };
        this.selectedTags.push(object);
    }

    removeTag(value: string) {
        var index = this.selectedTags.indexOf(value);
        this.selectedTags.splice(index, 1);
    }

    ngOnInit() {}

}
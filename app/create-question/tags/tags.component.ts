import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { TagService } from './tag.service';
import { ObjectToArrayPipe } from './../../pipes/objectToArray.pipe';

@Component({
    moduleId: module.id,
    selector: 'tags',
    templateUrl: 'tags.component.html',
    pipes: [ObjectToArrayPipe]
})
export class TagsComponent implements OnInit {
    availableTags: Array<string>;
    @Input() selectedTags:any[] = [];

    //availableTags: Observable<string[]>;

    constructor(private _tagService: TagService) { }

    searchTags(term: string) {
        this._tagService
            .searchTags(term)
            .filter(text => term.length >= 3)
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe(
                availableTags => this.availableTags = availableTags
            )
            
            // .then(availableTags => this.availableTags = availableTags);
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
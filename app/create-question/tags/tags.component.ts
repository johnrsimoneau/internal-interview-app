import { 
    Component, 
    OnInit, 
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { TagService } from './tag.service';

@Component({
    moduleId: module.id,
    selector: 'tags',
    templateUrl: 'tags.component.html'
})
export class TagsComponent {
    availableTags: Array<any>;
    noResults: boolean = false;
    chosenTags: any[] = [];

    @Input() sharedTagsArray:any[] = [];
    @Output() selectedTagsChange = new EventEmitter();

    constructor( private _tagService: TagService ) { }

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
        this.chosenTags.push(object)
        this.sharedTagsArray = this.chosenTags;
        this.selectedTagsChange.emit({
            value: this.sharedTagsArray
        });
    }

    removeTag(value: string) {
        var index = this.chosenTags.indexOf(value);
        this.chosenTags.splice(index, 1);
        this.sharedTagsArray = this.chosenTags;
        this.selectedTagsChange.emit({
            value: this.sharedTagsArray
        });
    }

}
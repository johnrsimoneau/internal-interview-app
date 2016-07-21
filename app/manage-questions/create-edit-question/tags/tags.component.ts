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
    @Input() allTagsArray:any = [''];
    @Output() selectedTagsChange = new EventEmitter();

    availableTags: Array<any>
    noResults: boolean = false;

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


    addTag(tag:string) {
        if (this.allTagsArray == undefined) {
            this.allTagsArray = [];
        }
        this.allTagsArray.push(tag);
        this.selectedTagsChange.emit({
            value: this.allTagsArray
        });
    }

    removeTag(value: string) {
        var indexOfTag = this.allTagsArray.indexOf(value);
        this.allTagsArray.splice(indexOfTag, 1);
        this.selectedTagsChange.emit({
            value: this.allTagsArray
        });
    }

}
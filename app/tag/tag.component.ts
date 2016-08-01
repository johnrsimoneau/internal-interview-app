import { Component, OnInit, DoCheck, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { TagService } from './tag.service';
import { TagFilterPipe } from './tag-filter.pipe';

@Component({
    moduleId: module.id,
    selector: 'tag',
    templateUrl: 'tag.component.html'
})
export class TagComponent implements OnInit {
    @Input() tagType: string;
    @Input() tagArrayFromServer: any = '';
    @Output() tagEvent = new EventEmitter();
    selectedTags: string[] = [];
    availableTags: any[] = [];
    foundTags: string[] = [];
    noResults: boolean = true;

    constructor(private _tagService: TagService, private _cdr: ChangeDetectorRef ) { }

     ngDoCheck() {
        if (this.tagArrayFromServer != '') {
            this.selectedTags = this.tagArrayFromServer;
        }
        this._cdr.detectChanges();
    }


    ngOnInit() {
        this._tagService.getTags(this.tagType)
            .map(i => i.tag)
            .subscribe((tags) => { 
                this.availableTags.push(tags);
            },
            (err) => { console.log(err); }); 
    }

    addNewTag(tagName: string) {
        this.selectedTags.push(tagName);
    }

    clearTextbox(input: any): string {
        this.noResults = true;
        return input.value = '';
    }
    
    addToSelectedTags(tagValue: string) {
        let indexOfAvailTags = this.availableTags.indexOf(tagValue);
        let indexOfFoundTags = this.foundTags.indexOf(tagValue);
        let toRemove: string;
        this.foundTags.splice(indexOfFoundTags, 1);

        toRemove = this.availableTags.splice(indexOfAvailTags, 1).toString();
        this.availableTags = [...this.availableTags];
        this.selectedTags.push(toRemove);
        this.foundTags = [...this.foundTags];

        this.tagEvent.emit({
            value: this.selectedTags
        });
    }

    addBackToAvailableTags(index: number) {
        let removed: string;
        removed = this.selectedTags.splice(index, 1).toString();
        this.availableTags.push(removed);
        this.tagEvent.emit({
            value: this.selectedTags
        });
    }

    filterTags(searchTerm: string) {
        let filter = searchTerm.toLocaleLowerCase();
        this.foundTags =  filter ? this.availableTags.filter((item:any) => item.toLocaleLowerCase().indexOf(filter) != -1) : this.availableTags;
        if (!this.foundTags.length) { 
            this.noResults = false;  
        } else {
            this.noResults = true;
        }

    }

}
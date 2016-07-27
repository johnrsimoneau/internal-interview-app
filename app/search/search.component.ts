import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { SearchService } from './search.service';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES ]
})
export class SearchQuestionsComponent {
    @Input() searchType: string;
    @Output() searchingEvent = new EventEmitter();
    searchResults: any;

    constructor(private _searchService: SearchService) { }

    searchContent(term:string) {
        this.searchType; // questions or templates
        if (term.length == 0 || term.length == undefined) {
            this.clearQuestionSearchResults(term);
            return false;
        }

        this._searchService
            .searchContent(this.searchType, term)
            .filter(text => term.length >= 2)
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe(
                results => {
                    if (results.length) {
                        this.searchResults = results;
                        this.searchingEvent.emit({
                            value: this.searchResults
                        });
                    } else {
                        this.searchResults = undefined;
                        this.searchingEvent.emit({
                            value: this.searchResults
                        });
                    }
                }
            )

    }

    clearQuestionSearchResults(term?:string) {
        this.searchResults = "cleared";
        this.searchingEvent.emit({
            value: this.searchResults
        });
    }

}
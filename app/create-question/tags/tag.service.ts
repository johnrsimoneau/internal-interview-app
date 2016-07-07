import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

const URL_TAGS = 'http://localhost:1313/api/questionTags';

@Injectable()
export class TagService {

    constructor(private _http: Http) { }

    getTags() {
        return this._http.get(URL_TAGS) 
            .map((response: Response) => response.json())
            .catch(this._handleError);
    }

    _handleError(err:any) {
        console.log(err);
        // TODO: customize the message to be user-friendly
        return Observable.throw(err); 
    }

}
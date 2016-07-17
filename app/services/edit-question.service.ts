import { Injectable } from '@angular/core';
import {
    Http,
    Response,
    Headers,
    RequestOptions
} from '@angular/http';
import { Observable } from 'rxjs/Rx'

const URL = 'http://localhost:1313/api/questions/'

@Injectable()
export class EditQuestionService {

    constructor(private _http: Http) { }

    getQuestionToEdit(id:string) {
        var editQuestionUrl = URL + id;
        return this._http.get(editQuestionUrl)
            .map((response: Response) => response.json())
            .catch(this._handleError);
    }

    _handleError(err:any) {
        console.log(err);
        // TODO: customize this error!
        return Observable.throw(err);
    }

}
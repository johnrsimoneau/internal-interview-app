import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

const URL_AllQuestions = 'http://localhost:1313/api/questions';

@Injectable()
export class QuestionListService {

    constructor(private _http: Http) { }

    getQuestions() {
        return this._http.get(URL_AllQuestions)
            .map((response: Response) => response.json())
            .catch(this._handleError);
    }

    _handleError(err:any) {
        console.log(err);
        // TODO: customize this error!
        return Observable.throw(err);
    }

}
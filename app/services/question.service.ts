import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

const URL_QUESTIONS = 'http://localhost:1313/api/questions';

@Injectable()
export class QuestionService {

    constructor(private _http: Http) { }

    getQuestions() {
        return this._http.get(URL_QUESTIONS)
            .map((response: Response) => response.json())
            .catch(this._handleError);
    }

    postQuestion(formContents:any) {
        var data:any;
        this._http.post(
            URL_QUESTIONS,
            JSON.stringify(formContents)
        ).subscribe((response: Response) => {
            data = response.json();
            console.log(data);
        });
    }

    _handleError(err:any) {
        console.log(err);
        // TODO: customize this error!
        return Observable.throw(err);
    }

}
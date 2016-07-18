import { Injectable } from '@angular/core';
import { 
    Http, 
    Response, 
    Headers,
    RequestOptions 
} from '@angular/http';
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

    getQuestionToEdit(id: string) {
        var editQuestionUrl = URL_QUESTIONS + '/' + id;
        return this._http.get(editQuestionUrl)
            .map((response: Response) => response.json())
            .catch(this._handleError);
    }

    postQuestion(formContents:any) {
        let body = JSON.stringify(formContents);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options =  new RequestOptions({headers: headers });
        
        var data:any;
        this._http.post(URL_QUESTIONS, body, options)
            .subscribe((response: Response) => {
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
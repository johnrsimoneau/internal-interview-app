import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

const URL_QUESTIONS = 'http://localhost:1313/api/questions';
@Injectable()
export class QuestionService {

    constructor(private _http: Http) { }

    private _extractData(res:Response) {
        let body = res.json();
        return body || {};
    }

    getQuestions() {
        return this._http.get(URL_QUESTIONS)
            .map((response: Response) => response.json())
            .catch(this._handleError);
    }

    getQuestionsBySearchTerm(term: string) {
        let apiUrl = 'http://localhost:1313/api/';
        let params: string = [
          'questions',
          'search',
          `${term}`  
        ].join('/');
        let queryUrl: string = apiUrl + params;
        
        return this._http.get(queryUrl)
            .map(this._extractData)
            .catch(this._handleError);
    }

    getQuestionToEdit(id:string) {
        var editQuestionUrl = URL_QUESTIONS + '/' + id;
        return this._http.get(editQuestionUrl)
            .map((response: Response) => response.json())
            .catch(this._handleError);
    }

    putQuestion(id:string, formContents:any) {
        var putQuestionUrl = URL_QUESTIONS + '/' + id;
        let body = JSON.stringify(formContents);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options =  new RequestOptions({headers: headers });
        var data:any;
        this._http.put(putQuestionUrl, body, options)
            .subscribe((response: Response) => {
                data = response.json();
        });
    }

    postQuestion(formContents:any) {
        let body = JSON.stringify(formContents);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options =  new RequestOptions({headers: headers });
        var data:any;
        this._http.post(URL_QUESTIONS, body, options)
            .subscribe((response: Response) => {
                data = response.json();
        });
    }

    deleteQuestion(id:string) {
        var deleteQuestionUrl = URL_QUESTIONS + '/' + id;
        var data: any;
        this._http.delete(deleteQuestionUrl)
            .subscribe((response: Response) => {
                data = response.json();
                console.log(data);
            })
    }

    _handleError(err:any) {
        console.log(err);
        // TODO: customize this error!
        return Observable.throw(err);
    }

}
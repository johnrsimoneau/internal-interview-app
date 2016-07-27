import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SearchService {

    constructor(private _http: Http) { }

    private _extractData(res:Response) {
        let body = res.json();
        return body || {};
    }

    searchContent(searchType:string, term:string) {
        let apiUrl = 'http://localhost:1313/api/';
        let params: string = [
          `${searchType}`,
          'search',
          `${term}`  
        ].join('/');
        let queryUrl: string = apiUrl + params;
        
        return this._http.get(queryUrl)
            .map(this._extractData)
            .catch(this._handleError);
    }

    _handleError(err:any) {
        console.log(err);
        // TODO: customize this error!
        return Observable.throw(err);
    }

}
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TagService {

    constructor(private _http: Http) { }

    private _extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    getTags(tagType:string) {
        let apiUrl = "http://localhost:1313/api/"
        let params: string = [
            `${tagType}`
        ].join('/');
        let queryUrl: string = apiUrl + params;
        return this._http.get(queryUrl)
            .flatMap(this._extractData)
            .catch(this.handleError);
    }

    handleError(err:any) {
        console.log(err);
        // TODO: customize the message to be user-friendly
        return Observable.throw(err); 
    }

}
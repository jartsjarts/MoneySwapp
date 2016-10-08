import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import {Plan} from './plan';

@Injectable()
export class PlanService {

    private _url = "http://localhost:5000/plans";
    constructor(private _http: Http) { }

    getPlans(filter?: any): Promise<Plan[]> {
        var url = this._url;
        if (filter && filter.userId)
            url += "?userId=" + filter.userId;

        return this._http.get(url)
            .toPromise()
            .then(resp => resp.json() as Plan[]);
    }

    getComments(postId: string): Promise<any[]> {
        return this._http.get(this._url + "/" + postId + "/comments")
            .toPromise()
            .then(resp => resp.json() as any[]);
    }
}



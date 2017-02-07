import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class IndeedService {
  private serviceUrl = "http://api.indeed.com/ads/apisearch";
  constructor (private http: Http) {}


  getJobs(){

  }
}

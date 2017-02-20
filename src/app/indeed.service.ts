import { Injectable } from '@angular/core';
import { Jsonp,Http, URLSearchParams, Request, RequestOptions, Headers, RequestMethod } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { NgForm } from '@angular/forms';


@Injectable()
export class IndeedService {
  private serviceUrl:string = "http://api.indeed.com/ads/apisearch";
  private publisherId = "9805771018719316";
  private version = "2";
  constructor (private http: Http) {}

  search(f: NgForm){
    console.log("in search");
    console.log(this.serviceUrl);
    let headers = new Headers({"Access-Control-Allow-Origin": "http://localhost:4200", "content-type": "application/javascript"});
    let params = new URLSearchParams();
    params.set("q", f.value.keys);
    params.set("publisher", this.publisherId);
    params.set("v", this.version);
    params.set("fromage", f.value.fromage);
    params.set("l", f.value.location);
    params.set("format", "json");
    params.set("Access-Control-Allow-Origin", "*");


    let options = new RequestOptions({ url: this.serviceUrl, method: RequestMethod.Get, search: params});
    var req = new Request(options);
    console.log(options);
    //params.set('callback', 'JSONP_CALLBACK');



    return this.http
           .request(req)
           .map(response => response.json());

/*
    let wikiUrl = 'http://en.wikipedia.org/w/api.php';
    let params = new URLSearchParams();
    let headers = new Headers({"Access-Control-Allow-Origin": "http://localhost:4200"});
params.set('search', "angular"); // the user's search value
params.set('action', 'opensearch');
params.set('format', 'json');
params.set("Access-Control-Allow-Origin", "*");
//params.set('callback', 'JSONP_CALLBACK');
// TODO: Add error handling
this.http.get(wikiUrl, { search: params })
           .map(response => response.json())
           .subscribe( r => console.log(r)); */
}

}

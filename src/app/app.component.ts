import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IndeedService } from './indeed.service'
//import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  results: Array<string> = [];

  constructor(private indeedService: IndeedService) {}
  onSubmit(f: NgForm) {
  console.log(f.value);
   this.indeedService.search(f)
   .subscribe( res => this.results = res);
   console.log(this.results);
    return false;
  }
}

import { Component, OnInit , AfterContentInit} from '@angular/core';
import { IResult } from './result';
import {JasearchService} from '../jasearch.service';
import {ActivatedRoute } from '@angular/router';

@Component({
  //selector: 'app-jaresults',
  templateUrl: './jaresults.component.html',
  styleUrls: ['./jaresults.component.css']
})
export class JaresultsComponent implements OnInit   {

 constructor(private _resultsService: JasearchService, private _route: ActivatedRoute) {
   }

  pageTitle: string = 'And the results are...';
  results: IResult ;
  errorMessage: any;

  ngOnInit() {
    
    let searchText = this._route.snapshot.paramMap.get('searchText');
    this._resultsService.getSearchResults(searchText).subscribe(results => this.results = results, error => this.errorMessage = <any>error);
    //console.log(this.results);
  }

  
}

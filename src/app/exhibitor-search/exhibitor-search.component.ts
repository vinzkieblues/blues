import { Component, OnInit } from '@angular/core';

import { Observable ,  Subject ,  of } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Exhibitor } from '../exhibitor';
import { ExhibitorService } from '../exhibitor.service';


@Component({
  selector: 'app-exhibitor-search',
  templateUrl: './exhibitor-search.component.html',
  styleUrls: ['./exhibitor-search.component.css']
})
export class ExhibitorSearchComponent implements OnInit {

  exhibitors$: Observable<Exhibitor[]>;
  private searchTerms = new Subject<string>();

  constructor(private exhibitorService: ExhibitorService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {

    this.exhibitors$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.exhibitorService.searchExhibitors(term)),
    );

  }

}

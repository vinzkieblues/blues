import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {URLSearchParams} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { catchError, map, tap } from 'rxjs/operators';

import { Exhibitor } from './exhibitor';
import { Country } from './country';
import { Category } from './category';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ExhibitorService {
 
  private exhibitorsUrl = 'https://api.exhibition-manual.com/api/exhibitors/';
  private eventCode = 'PEX17BR';
  private token = 'OHc5ZHVQL29MZm0vc2UxL20zLy9tM1NlbDUxUDdlN1E2eUJhcVpLeFhNcz01';

 
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  
  /** GET Exhibitors from the server */
  getExhibitors (): Observable<Exhibitor[]> {    
    return this.http.get<Exhibitor[]>(this.exhibitorsUrl + 'catalogues/?' +'eventCode=' + this.eventCode + '&token=' +this.token )
      .pipe(
        tap(exibitors => this.log(`fetched exhibitors`)),
        catchError(this.handleError('getExhibitors', []))
      );
  }

  getExhibitorByName (companyName: string): Observable<Exhibitor[]> {    
    return this.http.get<Exhibitor[]>(this.exhibitorsUrl + 'catalogues/?' +'eventCode=' + this.eventCode + '&token=' +this.token + '&guid=' + companyName)
      .pipe(tap(exibitors => this.log(`fetched exhibitors`)),
        catchError(this.handleError('getExhibitor by Company Name', []))
      );
  }

  getExhibitorById (companyName: string): Observable<Exhibitor[]> {    
    return this.http.get<Exhibitor[]>(this.exhibitorsUrl + 'catalogues/?' +'eventCode=' + this.eventCode + '&token=' +this.token + '&guid='+companyName)
      .pipe(tap(exibitors => this.log(`fetched exhibitors`)),
        catchError(this.handleError('getExhibitor by Company Name', []))
      );
  }

  getExhibitorByCategories (categories: string): Observable<Exhibitor[]> {             
    console.log(this.exhibitorsUrl + 'catalogues/?' +'eventCode=' + this.eventCode + '&token=' +this.token + '&categories='+categories);
    return this.http.get<Exhibitor[]>(this.exhibitorsUrl + 'catalogues/?' +'eventCode=' + this.eventCode + '&token=' +this.token + '&categories='+categories)
      .pipe(tap(exibitors => this.log(`fetched exhibitors`)),
        catchError(this.handleError('getExhibitor by Company Name', []))
      );
  }
  

  getExhibitorCountries (): Observable<Country[]> {    
    return this.http.get<Country[]>(this.exhibitorsUrl + 'countries/?' +'eventCode=' + this.eventCode)
      .pipe(tap(country => this.log(`fetched Countries`)),
        catchError(this.handleError('getExhibitorCountries', []))
      );
  }

  getExhibitorCategories (): Observable<Category[]> {    
    return this.http.get<Category[]>(this.exhibitorsUrl + 'categories/?' +'eventCode=' + this.eventCode)
      .pipe(tap(category => this.log(`fetched Categories`)),
        catchError(this.handleError('getExhibitorCategories', []))
      );
  }


  /** GET Exhibitor By Name from the server */
  // getExhibitorById (companyName: string): Observable<Exhibitor[]> {    
  //   return this.http.get<Exhibitor[]>(this.exhibitorsUrl+'&guid='+companyName)
  //     .pipe(tap(exibitors => this.log(`fetched exhibitors`)),
  //       catchError(this.handleError('getExhibitor by Company Name', []))
  //     );
  // }

  // /** GET Exhibitor By ID from the server */
  // getExhibitorById(id: string): Observable<Exhibitor> {        
  //   const url = `${this.exhibitorsUrl}&guid=${id}`;
  //   console.log(url);
  //   return this.http.get<Exhibitor>(url).pipe(
  //     tap(_ => this.log(`fetched exhibitor id=${id}`)),
  //     catchError(this.handleError<Exhibitor>(`getExhibitor id=${id}`))
  //   );      
  // }

  /* GET exhibitors whose name contains search term */
  searchExhibitors(term: string): Observable<Exhibitor[]> {
    if (!term.trim()) {
      // if not search term, return empty exhibitor array.
      return of([]);
    }
    return this.http.get<Exhibitor[]>(this.exhibitorsUrl + 'catalogues/?' +'eventCode=' + this.eventCode + '&token=' +this.token +'&name='+term).pipe(
      tap(_ => this.log(`found exhibitors matching "${term}"`)),
      catchError(this.handleError<Exhibitor[]>('searchExhibitors', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add('ExhibitorService: ' + message);
  }


}

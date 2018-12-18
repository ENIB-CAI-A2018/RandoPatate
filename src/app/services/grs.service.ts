import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders } from '@angular/common/http';




import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Gr } from '../Gr';
import { Spec } from '../Spec';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GrService {
  // URL to web API
  private grsUrl = 'assets/Grs/Grs.json';
  private grUrl;

  constructor(
    private http: HttpClient) {

  }

  getGrs() {
    return this.http.get<Gr[]>("http://127.0.0.1:3000/Randos/");
}
  getGr(GrId:string) {
    return this.http.get<Gr>("http://127.0.0.1:3000/Randos/" + GrId);
}

  getSpecs() {
  return this.http.get<Spec[]>("http://127.0.0.1:3000/Specialite/");
}




  /**
    getGr(GrId: String): Observable<Gr> {
      this.grUrl='Grs/' + GrId + '.json';
      return this.http.get<Gr>(this.grUrl);
    }



    
   
    getGrs (): Observable<Gr[]> {
      return this.http.get<Gr[]>(this.grsUrl)
      .pipe(
          catchError(this.handleError('getGrs', [])));
    }
  
  
   
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
    */    
  }
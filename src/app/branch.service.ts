import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BranchTree } from '@ataastar/rm-api-ts-oa';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  private apiUrl = 'http://localhost:3000/branch';

  constructor(private http: HttpClient) {
    console.log("BranchTreeService constructor");
  }

  getBranchTree(): Observable<BranchTree[]> {
    return this.http.get<BranchTree[]>(this.apiUrl);
  }

}

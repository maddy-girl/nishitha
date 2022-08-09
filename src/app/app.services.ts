import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

@Injectable()
export class AppService {
    searchWord = new Subject<string>();
    constructor(private http: HttpClient) { }

    getSearchWord() {
        return this.searchWord;
    }

    setSearchWord(word: string) {
        this.searchWord.next(word);
    }


    getData(searchTerm: string, start: number, itemPerPage: number): Observable<any> {
        return this.http.get(`https://www.blibli.com/backend/search/products?searchTerm=${searchTerm}&start=${start}&itemPerPage=${itemPerPage}`);
    }


}
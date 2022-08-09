import { Component, OnInit } from '@angular/core';
import { AppService } from './app.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {

  }
  productsList: any[] = []
  title = 'Quinbay';
  currentStart = 0;
  searchTerm: string = '';
  isLoading = true;

  ngOnInit() {

    this.getData('samsung');

    this.appService.getSearchWord().subscribe(data => {
      this.searchTerm = data;
    })
    this.appService.setSearchWord('samsung');

  }

  onClickNext() {
    if (this.searchTerm !== '') {
      this.currentStart += 1;
      this.getData(this.searchTerm);
    }
  }
  onClickBack() {
    if (this.currentStart !== 0 && this.searchTerm !== '') {
      this.currentStart -= 1;
      this.getData(this.searchTerm);
    }
  }

  onClickSearch(searchWord: string) {
    if (searchWord !== '') {
      this.currentStart = 0;
      this.getData(searchWord);
    }
  }

  onClickReset() {
    this.searchTerm = '';
  }

  getData(searchWord: string) {
    this.isLoading = true;
    this.appService.getData(searchWord, this.currentStart, 24).subscribe(data => {
      this.isLoading = false;
      console.log(data);
      this.productsList = data.data.products;
    }, 
    err => {
      this.isLoading = false;
      console.log(err.error.message);
    })
  }

  ngOnDestroy() {
    this.appService.getSearchWord().unsubscribe();
  }
}

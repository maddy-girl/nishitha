import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from 'src/app/app.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchTerm: string = '';
  @Output() onSearch: any = new EventEmitter();
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getSearchWord().subscribe(data => {
      this.searchTerm = data;
    })
  }

  onSearchClick() {
    this.onSearch.emit(this.searchTerm);
  }

  onInputChange(e: any) {
    this.appService.setSearchWord(e.target.value);
  }

  onCloseClick() {
    this.searchTerm = ''
  }

  ngOnDestroy() {
    this.appService.getSearchWord().unsubscribe();
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from 'src/app/app.services';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Output() onPrevChange: any = new EventEmitter();
  @Output() onNextChange: any = new EventEmitter();
  @Input() start: number = 0;
  searchWord: string = '';
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getSearchWord().subscribe(data => {
      this.searchWord = data;
    })
  }

  onPrevClick() {
    this.onPrevChange.emit();
  }

  onNextClick() {
    this.onNextChange.emit();
  }

  ngOnDestroy() {
    this.appService.getSearchWord().unsubscribe();
  }

}

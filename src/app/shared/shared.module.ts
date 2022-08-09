import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [LoaderComponent, HeaderComponent, PaginationComponent, ButtonComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

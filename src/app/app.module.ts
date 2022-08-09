import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.services';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { SharedModule } from './shared/shared.module';
import { LoaderComponent } from './shared/loader/loader.component';
import { ProductListComponent } from './product-listing/product-list/product-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { ButtonComponent } from './shared/button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    ProductListComponent,
    HeaderComponent,
    PaginationComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    // SharedModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

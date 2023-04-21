import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './home/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { TypefilterPipe } from './pipes/typefilter.pipe';
import { PricefilterPipe } from './pipes/pricefilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    TypefilterPipe,
    PricefilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ContainerComponent } from './container/container.component';

import { ProductHeadingComponent } from './product-heading/product-heading.component';
import { ProductBoxComponent } from './product-box/product-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ContainerComponent,
    ProductHeadingComponent,
    ProductBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

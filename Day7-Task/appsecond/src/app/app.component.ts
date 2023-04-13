import { Component } from '@angular/core';
import {datafields}  from './data/info'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  // title:string = 'Welcome'; 
  image:string[]=datafields.product_icon;

  
  services:string[] =datafields.heading_desc;
  descriptions:string[]=
  [
    datafields.seo,
    datafields.branding,
    datafields.logo
  ]


dataitems=datafields
}
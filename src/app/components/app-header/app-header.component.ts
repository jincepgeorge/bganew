import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  selectedItem:any;
  constructor() { }

  ngOnInit() {
    $(document).ready(function(){

      // Cloning main navigation for mobile menu
      $(".mobile-navigation").append($(".main-navigation .menu").clone());
  
      // Mobile menu toggle 
      $(".menu-toggle").click(function(){
        $(".mobile-navigation").slideToggle();
      });
  
    
    });
  }
  listClick(event, newValue) {
    console.log(newValue);
    this.selectedItem = newValue;  // don't forget to update the model here
    // ... do other stuff here ...
}

}

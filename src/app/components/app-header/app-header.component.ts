import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

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

}

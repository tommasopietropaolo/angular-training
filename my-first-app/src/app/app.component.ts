import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  //styleUrls: ['./app.component.css'] --> take style from a file 
  styles:[`
  h3{
    color: red;
  }`]//take direct the style from here
})
export class AppComponent {
  
}

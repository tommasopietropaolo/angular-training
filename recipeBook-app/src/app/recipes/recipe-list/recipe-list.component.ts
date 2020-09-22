import { Component, OnInit } from '@angular/core';

//import model that we create
import{Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    //dummy object just to try it
    new Recipe('Pasta Test','this is dummy recipe','https://upload.wikimedia.org/wikipedia/commons/5/54/Pasta-2802156_1920.jpg'),
    new Recipe('Pasta Test','this is dummy recipe','https://upload.wikimedia.org/wikipedia/commons/5/54/Pasta-2802156_1920.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

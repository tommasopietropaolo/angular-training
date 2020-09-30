import { Component, EventEmitter, OnInit, Output } from '@angular/core';

//import model that we create
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  //connect the event of recipe item component to another event to move on another component
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    //dummy objects just to try it
    new Recipe(
      'Pasta Test',
      'this is dummy recipe',
      'https://upload.wikimedia.org/wikipedia/commons/5/54/Pasta-2802156_1920.jpg'
    ),
    new Recipe(
      'Pasta Test Two',
      'this is dummy recipe',
      'https://upload.wikimedia.org/wikipedia/commons/5/54/Pasta-2802156_1920.jpg'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  constructor() {}

  ngOnInit(): void {}
}

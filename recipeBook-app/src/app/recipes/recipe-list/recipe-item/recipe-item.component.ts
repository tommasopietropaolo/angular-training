import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe;

  //create a new event connect to the click with name recipeselected
  @Output() recipeSelected = new EventEmitter<void>();

  onSelect(){
    this.recipeSelected.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}

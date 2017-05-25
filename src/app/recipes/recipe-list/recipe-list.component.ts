import { Component, OnInit } from '@angular/core';
// we are importing our class 'Recipe' from recipe.model.ts
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // creating an array of Recipe objects - coming from our Recipe class
  recipes: Recipe[] = [
    // we are creating a new instance of the Recipe class
    // executing this as a method - we are calling the constructor
    new Recipe('testRecipe', 'this is a test', 'http://pngimg.com/uploads/sushi/sushi_PNG9266.png?i=1')
  ];
  constructor() { }

  ngOnInit() {
  }

}

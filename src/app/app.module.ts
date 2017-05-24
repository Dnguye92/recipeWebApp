import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipeBook/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipeBook/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipeBook/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shoppingList/shoppingList-Components/shoppingList.component';
import { ShoppingListEditComponent } from './shoppingList/shoppingListEdit/shoppingListEdit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

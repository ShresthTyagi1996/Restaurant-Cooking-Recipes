import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

class Recipe {
  title: string;
  image: string;
  description: string;
  servings: number;
  prep_time: string;
  cook_time: string;
  notes: string;
  ingredients: string[];
  directions: string[];
  nutrition_facts: string[];
  ratings: number;

  constructor() {
    this.title = '';
    this.image = '';
    this.description = '';
    this.servings = 1;
    this.prep_time = '';
    this.cook_time = '';
    this.notes = '';
    this.ingredients = [];
    this.directions = [];
    this.nutrition_facts = [];
    this.ratings = 0;
  }
}

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {
  recipeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.recipeForm = this.fb.group({
      title: ['', Validators.required],
      image: [''], // Optional for now
      description: [''],
      servings: [1, Validators.min(1)],
      prep_time: [''],
      cook_time: [''],
      notes: [''],
      ingredients: this.fb.array([this.fb.control('', Validators.required)]),
      directions: this.fb.array([this.fb.control('', Validators.required)]),
      nutrition_facts: this.fb.array([this.fb.control('')]), // Optional
      ratings: [0, [Validators.min(0), Validators.max(5)]], // Optional for input
    });
  }

  get ingredientControls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  addIngredient() {
    this.ingredientControls.push(this.fb.control('', Validators.required));
  }

  removeIngredient(index: number) {
    // this.ingredientControls.removeAt(index);
    console.log(index);
  }

  get directionControls() {
    return (this.recipeForm.get('directions') as FormArray).controls;
  }

  addDirection() {
    this.directionControls.push(this.fb.control('', Validators.required));
  }

  removeDirection(index: number) {
    // this.directionControls.removeAt(index);
    console.log(index);

  }

  get nutritionFactControls() {
    return (this.recipeForm.get('nutrition_facts') as FormArray).controls;
  }

  addNutritionFact() {
    this.nutritionFactControls.push(this.fb.control(''));
  }

  removeNutritionFact(index: number) {
    // this.nutritionFactControls.removeAt(index);
    console.log(index);

  }

  onSubmit() {
    if (this.recipeForm.valid) {
      const newRecipe: Recipe = this.recipeForm.value;
      console.log('New Recipe:', newRecipe);
      // Here you would typically send this data to your backend service
    } else {
      // Mark all controls as touched to trigger validation messages
      this.markAllAsTouched();
    }
  }

  markAllAsTouched() {
    Object.keys(this.recipeForm.controls).forEach(key => {
      this.recipeForm.get(key)?.markAsTouched();
    });
    (this.recipeForm.get('ingredients') as FormArray).controls.forEach(control => control.markAsTouched());
    (this.recipeForm.get('directions') as FormArray).controls.forEach(control => control.markAsTouched());
    (this.recipeForm.get('nutrition_facts') as FormArray).controls.forEach(control => control.markAsTouched());
  }

  addSeveralIngredients() {
    // You can implement a dialog or a multi-line textarea input here
    // For simplicity, let's add a few empty ingredient controls
    for (let i = 0; i < 3; i++) {
      this.ingredientControls.push(this.fb.control('', Validators.required));
    }
  }

  onSubmitRecipe() {
    if (this.recipeForm.valid) {
      const newRecipe: Recipe = this.recipeForm.value;
      console.log('New Recipe:', newRecipe);
      // Here you would typically send this data to your backend service
    } else {
      // Mark all controls as touched to trigger validation messages
      this.markAllAsTouched();
    }
  }
}
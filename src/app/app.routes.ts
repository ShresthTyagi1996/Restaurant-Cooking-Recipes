import { Routes } from '@angular/router';
import { RecipesSectionComponent } from './recipes-section/recipes-section.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { FAQSectionComponent } from './faq-section/faq-section.component';
import { CategoryPageComponent } from './category-page/category-page.component';

export const routes: Routes = [
    {
        path: '', component: RecipesSectionComponent
    },
    {
        path: 'category', component: CategoryPageComponent
    },
    {
        path: 'faq', component: FAQSectionComponent
    },
    {
        path: 'add-recipe', component: AddRecipeComponent
    },
];

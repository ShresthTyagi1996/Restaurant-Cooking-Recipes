export interface Recipe {
    title: string;
    ratings: number;
    image: string;
    description: string;
    ingredients: string[];
    directions: string[];
    nutrition_facts: string[];
    servings: number;
    prep_time: string;
    cook_time: string;
    notes: string;
    userID: string;
    recipeID: string;
}
export interface RecipeList {
    recipes: Recipe[];
}


/*
category : "Korean Snack"
cookTime: "30 min"
directions : (6) ["Make Sauce", "Boil Water", "Add Sauce, rice cake, eggs, and fish cake into the pot", "Boil for about 7 minutes while gently stiring once in a while", "Add vegetables and boil additional 2 or 3 minutes", "Serve"]
imagePath:"/images/teokbokkee.jpg"
ingredients:(11) ["4 cups water", "1 pound rice cake", "1 1/2 cups of long cut fish cake (optional)", "2 or 3 shelled hard-boiled eggs (optional)", "2 tablespoons chopped green onion", "2/3 cup sugar", "1 tablespoon red chilli flakes (gochugaru)", "1/3 cup red chilli paste (gochujang)", "1/2 cup soy sauce", "1 or 2 tablespoons chopped green onion", "1 tablespoon sesame seeds"]
koreanTitle:"떡볶이"
level:"Intermediate"
prepTime: "25 min"
title: "Deokbokkee - Spicy Rick Cake"
totalTime: "55 min"
yield:"4 to 5 serviings"
*/
export class Recipe {
  id: number;
  category : string;
  cookTime: string;
  directions : string[];
  imagePath: string;
  description: string[];
  ingredients: string[];
  koreanTitle: string;
  koreanTitlePron: string;
  level:string;
  prepTime: string;
  title: string
  totalTime: string;
  yield: string;
  caloriesPerServing: string;
}

/* private String title;
    private String koreanTitle;
    private String koreanTitlePron;
    private String imagePath;
    private List<String> description;
    private String category;
    private String totalTime;
    private String prepTime;
    private String cookTime;
    private String yield;
    private String level;
    private String caloriesPerServing;
    private List<String> ingredients;
    private List<String> directions;
    */

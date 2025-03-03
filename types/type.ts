export interface RecipeResponses {
  recipes: Recipe[]
  total: number
  skip: number
  limit: number
}

export interface Recipe {
  id: number
  name: string
  ingredients: string[]
  instructions: string[]
  prepTimeMinutes: number
  cookTimeMinutes: number
  servings: number
  difficulty: string
  cuisine: string
  caloriesPerServing: number

  tags: string[]
  userid: number
  image: string
  rating: number
  reviewCount: number
  mealType: string[]
}

export interface rowsStructured {
  title?: string
  cook_time?: string
  person_number?: number
  created_at?: Date
}

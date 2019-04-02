import { createStore } from "redux"

const initialState = {
  name: "",
  category: "",
  first_name: "",
  last_name: "",
  ingredients: [],
  instructions: [],
  recipes: [],
}

export const DELETE = 'DELETE'
export const RESET_STATE = "RESET_STATE"
export const RECIPES = "RECIPES"
export const INSTRUCTIONS = "INSTRUCTIONS"
export const INGREDIENTS = "INGREDIENTS"
export const LAST_NAME = "LAST_NAME"
export const FIRST_NAME = "FIRST_NAME"
export const UPDATE_NAME = "UPDATE_NAME"
export const CATEGORY = "CATEGORY"

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case UPDATE_NAME:
      return { ...state, name: payload }

    case CATEGORY:
      return { ...state, category: payload }

    case FIRST_NAME:
      return { ...state, first_name: payload }

    case LAST_NAME:
      return { ...state, last_name: payload }

    case INGREDIENTS:
      const newIngredient = [...state.ingredients, payload]
      return { ...state, ingredients: newIngredient }

    case INSTRUCTIONS:
      const newInstruction = [...state.instructions, payload]
      return { ...state, instructions: newInstruction }

    case RECIPES:
      const newRecipe = {
        name: state.name,
        category: state.category,
        first_name: state.first_name,
        last_name: state.last_name,
        ingredients: state.ingredients,
        instructions: state.instructions,
      }
      const recipe = [...state.recipes, newRecipe]
      return { ...state, recipes: recipe }

    case RESET_STATE:
      const {
        name,
        category,
        first_name,
        last_name,
        ingredients,
        instructions,
      } = initialState
      return {
        ...state,
        name,
        category,
        first_name,
        last_name,
        ingredients,
        instructions,
      }

      case DELETE:
     const deleted = state.recipes.splice(payload, 1)
     return {...state, deleted}

    default:
      return state
  }
}

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

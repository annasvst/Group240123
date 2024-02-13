import { createSlice } from '@reduxjs/toolkit';
import { Recipe, RecipesInitialState, RecipesSliceState } from './models';

const initialState: RecipesInitialState = {
  data: [],
};

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState: initialState,
  reducers: {
    addRecipes: (state, action) => {
      const newRecipes = action.payload.filter(
        (payloadItem: Recipe) =>
          !state.data.some(
            (recipe: Recipe) => recipe.idMeal === payloadItem.idMeal,
          ),
      );

      state.data = [...state.data, ...newRecipes];
    },
    removeAll: (state) => {
      state.data = [];
    },
  },
});

export const { addRecipes, removeAll } = recipesSlice.actions;

export const selectorRecipes = (state: RecipesSliceState) => state.recipes.data;

export default recipesSlice.reducer;

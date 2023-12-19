import { RecipeList } from './components/RecipeList';
import { SearchBar } from './components/SearchBar';
import { NewRecipe } from './components/NewRecipe';
import {UserPage} from './components/UserPage';
import { RecipeDetail } from './components/RecipeDetail';
import { Routes, Route } from 'react-router-dom';
import {StyledPaper} from './components/StyledPaper';

export const AppRouter = ({ recipes, setRecipes }) => {
	return (
		<Routes>
			<Route
				path='/user'
				element={<UserPage />}
			/>

			<Route path='/recipes' >
				<Route path='new' element={<NewRecipe />} />
				<Route path=':id' element={<RecipeDetail />} />

        <Route index element={<div>Recipes routes</div>}></Route>
			</Route>

			<Route
				path='/'
				element={
					<StyledPaper>
						<SearchBar setRecipes={setRecipes} />
						<RecipeList recipes={recipes} />
					</StyledPaper>
				}
			/>
		</Routes>
	);
};

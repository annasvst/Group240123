import './App.css';
import { useEffect, useState } from 'react';
import { BD_SEARCH_BASE_URL } from './urls.js';
import Box from '@mui/material/Box';
import { AppRouter } from './AppRouter.jsx';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme.js';
import { RecipesProvider } from './modules/recipes/RecipesProvider';
import { Navbar } from './components/Navbar';

export const App = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		fetch(BD_SEARCH_BASE_URL)
			.then((response) => response.json())
			.then((data) => setRecipes(data.meals));
	}, []);

	return (
		<div className='app-container'>
			<ThemeProvider theme={theme}>
				<RecipesProvider>
					<Navbar />
					<Box sx={{ marginTop: theme.navbarHeight }}>
						<AppRouter recipes={recipes} setRecipes={setRecipes} />
					</Box>
				</RecipesProvider>
			</ThemeProvider>
		</div>
	);
};

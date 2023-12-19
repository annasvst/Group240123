import './App.css';
import { useEffect, useState } from 'react';
import { BD_SEARCH_BASE_URL } from './urls.js';
import {AppRouter} from './AppRouter.jsx';
import { ThemeProvider } from '@mui/material';
import {theme} from './theme.js';

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
      	<AppRouter recipes={recipes} setRecipes={setRecipes} />
			</ThemeProvider>
			
		</div>
	);
};

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import { StyledPaper} from '../StyledPaper';
import { useNavigate } from "react-router-dom";
import './styles.css';

export const RecipeDetail = () => {
	let { id } = useParams();
	const [recipe, setRecipe] = useState();
  const navigate = useNavigate();

	useEffect(() => {
		if (id) {
			fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
				.then((response) => response.json())
				.then((data) => setRecipe(data.meals[0]));
		}
	}, [id]);

	const handleGoBack = () => {
		navigate(-1);
	}

	return recipe ? (
		<StyledPaper className='container'>
			<Typography variant='h4'>{recipe.strMeal}</Typography>
			<img className='recipe-image' src={recipe.strMealThumb} alt={recipe.strMeal} />
			<Typography variant='body1'>{recipe.strInstructions}</Typography>
      <Button color='primary' onClick={handleGoBack}>Go back</Button>
		</StyledPaper>
	) : (
		<div>Loading...</div>
	);
};

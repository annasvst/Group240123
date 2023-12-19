import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './styles.css';

export const RecipeDetail = () => {
	let { id } = useParams();
	const [recipe, setRecipe] = useState();

	useEffect(() => {
		if (id) {
			fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
				.then((response) => response.json())
				.then((data) => setRecipe(data.meals[0]));
		}
	}, [id]);

	return recipe ? (
		<div class='container'>
			<h1>{recipe.strMeal}</h1>
			<img src={recipe.strMealThumb} alt={recipe.strMeal} />
			<p>{recipe.strInstructions}</p>
		</div>
	) : (
		<div>Loading...</div>
	);
};

import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

export const RecipeList = ({ recipes }) => {
	return (
		<div>
			<Typography variant='h2'>Recipe</Typography>
			<ul>
				{recipes.map((recipe) => {
					return (
						<li key={recipe.idMeal}>
							<Link to={`recipes/${recipe.idMeal}`}>
								<Typography variant='h6'>{recipe.strMeal}</Typography>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

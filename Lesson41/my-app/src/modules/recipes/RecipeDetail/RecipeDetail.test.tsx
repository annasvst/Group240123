import { RecipeDetail } from './index';
import { render, screen } from '@testing-library/react';
import { mockRecipes } from '../../../utils/test-utils';
import { useRecipes } from '../RecipesProvider';
import { BrowserRouter, useParams } from 'react-router-dom';

jest.mock('../RecipesProvider', function () {
	return { useRecipes: jest.fn() };
});

jest.mock('react-router-dom', function () {
	return { 
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn() 
  };
});

describe('<RecipeDetail /> component', function () {
	it('should render recipe data if recipe is in RecipesContext store', function () {
		(useRecipes as jest.Mock).mockReturnValue(mockRecipes);
    (useParams as jest.Mock).mockReturnValue({id: `${mockRecipes[0].idMeal}`});

		render(
			<BrowserRouter>
				<RecipeDetail />
			</BrowserRouter>
		);
		const recipeContainer = screen.getByTestId('recipe-detail-container');
		expect(recipeContainer).toBeInTheDocument();

    expect(screen.queryByTestId('loading-container')).not.toBeInTheDocument();
	});

  it('should render recipe data if recipe can be fetch from API', function () {
		(useRecipes as jest.Mock).mockReturnValue([mockRecipes]);
    (useParams as jest.Mock).mockReturnValue({id: 'test-recipe-id'});
    // add mocked API call

		render(
			<BrowserRouter>
				<RecipeDetail />
			</BrowserRouter>
		);
		const recipeContainer = screen.getByTestId('recipe-detail-container');
		expect(recipeContainer).toBeInTheDocument();
	});
});

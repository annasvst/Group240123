import { RecipeDetail } from './index';
import { render, screen } from '@testing-library/react';
import { mockRecipes } from '../../../utils/test-utils';
import { BrowserRouter, useParams } from 'react-router-dom';
import {useSelector} from 'react-redux';

jest.mock('react-redux', function () {
	return { 
		...jest.requireActual('react-redux'),
		useSelector: jest.fn()
	};
});

jest.mock('react-router-dom', function () {
	return { 
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn() 
  };
});

describe('<RecipeDetail /> component', function () {
	it('should render recipe data if recipe is in RecipesContext store', function () {
		(useSelector as jest.Mock).mockReturnValue(mockRecipes);
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

	// TODO: add mocked API call
  xit('should render recipe data if recipe can be fetch from API', function () {
		(useSelector as jest.Mock).mockReturnValue(mockRecipes);
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

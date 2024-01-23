import { RecipeList } from './index';
import { render, screen } from '@testing-library/react';
import { mockRecipes } from '../../../utils/test-utils';
import { useRecipes } from '../RecipesProvider';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../RecipesProvider', function () {
	return { useRecipes: jest.fn() };
});

describe('<RecipeList /> component', function () {
	it('should render correctly', function () {
		(useRecipes as jest.Mock).mockReturnValue([]);

		render(<RecipeList />);
		const title = screen.getByTestId('recipe-list-title');
		const unorderedList = screen.getByTestId('recipe-list');

		expect(title).toBeInTheDocument();
		expect(title).toHaveTextContent('Recipes');
		expect(unorderedList).toBeInTheDocument();
	});

	it('should render recipe cards', function () {
		(useRecipes as jest.Mock).mockReturnValue(mockRecipes);

		render(
			<BrowserRouter>
				<RecipeList />
			</BrowserRouter>
		);
		const listItem = screen.getByTestId('recipe-list-item');

		expect(listItem).toBeInTheDocument();
    expect(screen.getAllByTestId('recipe-list-item')).toHaveLength(1);
	});
});

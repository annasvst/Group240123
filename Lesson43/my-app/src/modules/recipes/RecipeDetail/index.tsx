import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Button, Typography } from '@mui/material'
import { StyledPaper } from '../../../components/StyledPaper'
import { useNavigate } from 'react-router-dom'
import { Recipe } from '../models'
import { selectorRecipes } from '../recipesSlice'
import { useSelector } from 'react-redux'
import './styles.css'

export const RecipeDetail = () => {
  let { id } = useParams()
  const [recipe, setRecipe] = useState<Recipe | undefined>(undefined)
  const navigate = useNavigate()
  const storedRecipes = useSelector(selectorRecipes)

  useEffect(() => {
    if (id) {
      const currentRecipes: Recipe[] = storedRecipes.filter(
        (recipe) => recipe.idMeal === id,
      )
      if (currentRecipes.length > 0) {
        setRecipe(currentRecipes[0])
      } else {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
          .then((response) => response.json())
          .then((data) => setRecipe(data.meals[0]))
      }
    }
  }, [id, storedRecipes])

  const handleGoBack = () => {
    navigate(-1)
  }

  return recipe ? (
    <StyledPaper dataTestid='recipe-detail-container' className='container'>
      <Typography variant='h4'>{recipe.strMeal}</Typography>
      <img
        className='recipe-image'
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
      <Typography variant='body1'>{recipe.strInstructions}</Typography>
      <Button color='primary' onClick={handleGoBack}>
        Go back
      </Button>
    </StyledPaper>
  ) : (
    <div data-testid='loading-container'>Loading...</div>
  )
}

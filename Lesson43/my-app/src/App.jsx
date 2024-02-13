import './App.css'
import { useEffect } from 'react'
import { BD_SEARCH_BASE_URL } from './urls'
import Box from '@mui/material/Box'
import { AppRouter } from './AppRouter'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'
import { Navbar } from './components/Navbar'
import { useDispatch } from 'react-redux'
import { addRecipes } from './modules/recipes/recipesSlice'

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(BD_SEARCH_BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          dispatch(addRecipes(data.meals))
        }
      })
  }, [])

  return (
    <div className='app-container'>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Box sx={{ mt: theme.spacing(10) }}>
          <AppRouter />
        </Box>
      </ThemeProvider>
    </div>
  )
}

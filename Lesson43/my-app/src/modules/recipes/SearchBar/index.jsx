import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRecipes } from '../recipesSlice';

export const SearchBar = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          dispatch(addRecipes(data.meals));
        }
        setValue('');
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        size='small'
        variant='outlined'
        onChange={(event) => setValue(event.target.value)}
        value={value}
        placeholder={'Recipe name...'}
        sx={{ width: '100%' }}
      />
    </form>
  );
};

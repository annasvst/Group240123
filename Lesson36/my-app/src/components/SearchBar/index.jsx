
import { useState } from "react";

export const SearchBar = ({setRecipes}) => {
    const [value, setValue] = useState("");

    function handleSubmit (event) {
        event.preventDefault();

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
        .then(response => response.json())
        .then(data => {
          if (data.meals) {
            setRecipes(data.meals);
          } else {
            setRecipes([]);
          }
          setValue("");
        });
    };

    return(
      <form onSubmit={handleSubmit}>
          <input onChange={(event) => setValue(event.target.value)} value={value} type="text" />
          <button type="submit">Search</button>
      </form>
    )

};
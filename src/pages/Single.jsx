import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Preloader } from '../components/Preloader/Preloader';
import { Recipe } from '../components/Recipe/Recipe';
import { getMealById } from '../api';

function Single() {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getMealById(id).then((data) => 
      setRecipe(data.meals[0])
    );
  }, [id]);

  return <>{!recipe.idMeal ? <Preloader /> : <Recipe key={recipe.idMeal} recipe={recipe} />}</>;
}

export { Single };

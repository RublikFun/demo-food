import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import { MealsList } from '../components/MealsList/MealsList';
import { Preloader } from '../components/Preloader/Preloader';

function Category() {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilteredCategory(category).then((data) => {
      setMeals(data.meals);
    });
  }, [category]);

  return <>{!meals.length ? <Preloader /> : <MealsList category={category} meals={meals} />}</>;
}

export { Category };


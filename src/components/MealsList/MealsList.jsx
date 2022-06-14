import { useNavigate } from 'react-router-dom';
import { MealItem } from '../MealItem/MealItem';
import './MealsList.css';

function MealsList(props) {
  const { category, meals = [] } = props;

  const navigate = useNavigate();

  return (
    <div className='MealsList'>
      <h1 className='MealsList__title'>Category: {category}</h1>
      <hr className='MealsList__divider green lighten-2' />
      <button className='btn MealsList__brn deep-purple lighten-1' onClick={() => navigate(-1)}>
        Go to all Categories
      </button>
      <div className='MealsList__wrap'>
        {meals.map((meal) => (
          <MealItem key={meal.idMeal} {...meal} />
        ))}
      </div>
      <hr className='MealsList__divider green lighten-2' />
      <button className='btn MealsList__brn deep-purple lighten-1' onClick={() => navigate(-1)}>
        Go to all Categories
      </button>
    </div>
  );
}

export { MealsList };

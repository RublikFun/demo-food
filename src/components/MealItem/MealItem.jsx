import { Link } from 'react-router-dom';
import './MealItem.css';

function MealItem(props) {
  const { strMeal, strMealThumb, idMeal } = props;

  return (
    <div className='card horizontal MealItem z-depth-3 hoverable'>
      <div className='card-image'>
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className='card-stacked'>
        <div className='card-content'>
          <h5>{strMeal}</h5>
        </div>
        <div className='card-action '>
          <Link to={`/meal/${idMeal}`} className='deep-purple lighten-1 white-text'>
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
}

export { MealItem };

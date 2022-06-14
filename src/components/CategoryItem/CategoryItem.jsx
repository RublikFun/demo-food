import { Link } from 'react-router-dom';
import './CategoryItem.css';

function CategoryItem(props) {
  const { strCategory, strCategoryThumb, strCategoryDescription } = props;

  return (
    <div className='card CategoryItem z-depth-3 hoverable'>
      <div className='card-image'>
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className='card-content'>
        <h4>{strCategory}</h4>
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </div>
      <div className='card-action '>
        <Link to={`/category/${strCategory}`} className='deep-purple lighten-1 white-text'>
          View All Dishes
        </Link>
      </div>
    </div>
  );
}

export { CategoryItem };

import { CategoryItem } from '../CategoryItem/CategoryItem';
import './CategoriesList.css';

function CategoriesList(props) {
  const { categories = [] } = props;

  return (
    <div className='CategoriesList'>
      <h1 className='CategoriesList__title'>All Categories</h1>
      <hr className='CategoriesList__divider green lighten-2' />
      {
        categories.length ? (
          <div className='CategoriesList__wrap'>
            {categories.map((category) => (
              <CategoryItem key={category.idCategory} {...category} />
            ))}
          </div>
        ) : (<h5>No search result <span className="material-icons icon">sentiment_dissatisfied</span></h5>)
      }
    </div>
  );
}

export { CategoriesList };

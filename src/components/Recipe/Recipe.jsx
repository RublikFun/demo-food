import { useNavigate } from 'react-router-dom';
import './Recipe.css';

function Recipe(props) {
  const { recipe = {} } = props;

  const navigate = useNavigate();

  return (
    <div className='Recipe'>
      <div className='Recipe__head'>
        <h1 className='Recipe__title'>{recipe.strMeal}</h1>
        <div className='Recipe__info'>
          <span>
            Category: <u>{recipe.strCategory}</u>
          </span>
          {recipe.strArea ? (
            <span>
              Area: <u>{recipe.strArea}</u>
            </span>
          ) : null}
        </div>
      </div>

      <hr className='Recipe__divider green lighten-2' />

      <div className='Recipe__body'>
        <div>
          <img className='Recipe__img' src={recipe.strMealThumb} alt={recipe.strMeal} />
        </div>
        <div>
          {recipe.strInstructions.split('\n').map(function (item, index) {
            return <p key={index}>{item}</p>;
          })}

          <table className='highlight responsive-table'>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes('Ingredient') && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }

                return null;
              })}
            </tbody>
          </table>
        </div>
      </div>

      {recipe.strYoutube ? (
        <div>
          <h4>Video</h4>
          <hr className='Recipe__divider green lighten-2' />
          <div className='responsive-iframe'>
            <iframe
              className='Recipe__iframe z-depth-3'
              src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
              title={recipe.strMeal}
              frameBorder='0'
              allowFullScreen></iframe>
          </div>
        </div>
      ) : null}
      <hr className='Recipe__divider green lighten-2' />
      <button className='btn MealsList__brn deep-purple lighten-1' onClick={() => navigate(-1)}>
        Go to all Recipes
      </button>
    </div>
  );
}

export { Recipe };


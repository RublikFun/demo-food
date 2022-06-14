import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllCategories } from '../api';
import { CategoriesList } from '../components/CategoriesList/CategoriesList';
import { Preloader } from '../components/Preloader/Preloader';
import { Search } from '../components/Search/Search';

function Home() {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  const { search } = useLocation();
  const history = useNavigate();

  const handleFilter = (str) => {
    setFilteredCategories(categories.filter((item) => item.strCategory.toLowerCase().includes(str.toLowerCase())));

    history(`?search=${str}`);
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data.categories);
      setFilteredCategories(
        search
          ? data.categories.filter((item) =>
              item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase()),
            )
          : data.categories,
      );
    });
  }, [search]);

  return (
    <>
      <Search cb={handleFilter} />
      {!categories.length ? <Preloader /> : <CategoriesList categories={filteredCategories} />}
    </>
  );
}

export { Home };

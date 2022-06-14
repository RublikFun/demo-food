import { useState } from 'react';
import './Search.css';

function Search(props) {
  const {cb = Function.prototype} = props;
  const [value, setValue] = useState('');

  const handleKey = (e) => {
    if (e.code === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    cb(value);
  };

  const handleSetValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className='Search'>
      <input
        id='search'
        type='search'
        placeholder='Search'
        className='validate white-text deep-purple lighten-1'
        value={value}
        onChange={handleSetValue}
        onKeyDown={handleKey}
      />
      <i className='icon material-icons white-text right' onClick={handleSearch}>
        search
      </i>
    </div>
  );
}

export { Search };

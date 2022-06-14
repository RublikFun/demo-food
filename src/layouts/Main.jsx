import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Category } from '../pages/Category';
import { NotFound } from '../pages/NotFound';
import { Single } from '../pages/Single';

function Main() {
  return (
    <main className='container app-content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/category/:category' element={<Category />} />
        <Route path='/meal/:id' element={<Single />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
}

export { Main };

import { BrowserRouter } from 'react-router-dom';
import { Footer } from './layouts/Footer';
import { Header } from './layouts/Header';
import { Main } from './layouts/Main';

function App() {
  return (
    <>
      <BrowserRouter basename='/demo-food'>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
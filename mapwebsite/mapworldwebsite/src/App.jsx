import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='*' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
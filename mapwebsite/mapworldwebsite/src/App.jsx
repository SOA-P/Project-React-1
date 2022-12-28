import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='*' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
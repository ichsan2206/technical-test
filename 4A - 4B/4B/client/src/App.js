import './styles/styles.css'
import {Routes, Route } from 'react-router-dom'

import Product from './pages/user/Product'
import TemplateUser from './components/TemplateUser'
import AddFilm from './pages/user/AddFilm'
import AddType from './pages/user/AddType'

function App() {

  return (
        <Routes>
          {/* mother router user */}
          <Route path="/" element={<TemplateUser />}>
            <Route index element={<Product />}></Route>
            <Route path='/addHero' element={<AddFilm />}></Route>
            <Route path='/addType' element={<AddType />}></Route>
          </Route>
        </Routes>
  );
}

export default App;


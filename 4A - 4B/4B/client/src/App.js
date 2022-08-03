import './styles/styles.css'
import {Routes, Route } from 'react-router-dom'

import Product from './pages/user/Product'
import TemplateUser from './components/TemplateUser'
import AddHero from './pages/user/AddHero'
import AddType from './pages/user/AddType'
import Detail from './pages/user/Detail'
import UpdateHero from './pages/user/UpdateHero'
import UpdateType from './pages/user/UpdateType'

function App() {

  return (
        <Routes>
          {/* mother router user */}
          <Route path="/" element={<TemplateUser />}>
            <Route index element={<Product />}></Route>
            <Route path='/addHero' element={<AddHero />}></Route>
            <Route path='/addType' element={<AddType />}></Route>
            <Route path='/detail'element={<Detail />}></Route>
            <Route path='/updateHero'element={<UpdateHero />}></Route>
            <Route path='/updateType'element={<UpdateType />}></Route>
          </Route>
        </Routes>
  );
}

export default App;


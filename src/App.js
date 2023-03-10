
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Cart from './component/Cart';
import CategoryItem from './pages/CategoryItems'
import PerticularProduct from './pages/PerticularProduct';
import CategoryNavbar from './pages/CategoryNavbar';
import CategoryItem2 from './pages/CategoryItem2';
import { CarouselItem } from 'react-bootstrap';
function App() {
  return (
    <>
      <Router>
        <Navbar index id="1" />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<Cart />} />
          <Route path='/product' element={<PerticularProduct />} />
          <Route path='/category/' element={<CategoryNavbar />} />
          <Route element={<CategoryNavbar />} >
            <Route index path='/fruits' element={<CategoryItem />} />
            <Route exact path='/breakfast' element={<CategoryItem2 />} />
            <Route exact path='/munchies' element={<CategoryItem />} />
            <Route exact path='/cold-drink' element={<CategoryItem2 />} />
            <Route exact path='/food' element={<CategoryItem />} />
            <Route exact path='/tea' element={<CategoryItem2 />} />
            <Route exact path='/bakers' element={<CategoryItem />} />
            <Route exact path='/beauty' element={<CategoryItem2 />} />
            <Route exact path='/sweet' element={<CategoryItem />} />
            <Route exact path='/paan' element={<CategoryItem2 />} />
            <Route exact path='/aata' element={<CategoryItem />} />
            <Route exact path='/baby-care' element={<CategoryItem2 />} />
            <Route exact path='/home-office' element={<CategoryItem />} />
            <Route exact path='/personal-care' element={<CategoryItem2 />} />
            <Route exact path='/pet-care' element={<CategoryItem />} />
          </Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;


import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Cart from './component/Cart';
import CategoryItem from './pages/CategoryItems'
import PerticularProduct from '../src/pages/SingleProduct';
import CategoryNavbar from './pages/CategoryNavbar';
import CategoryItem2 from './pages/CategoryItem2';
import { CarouselItem } from 'react-bootstrap';
import SearchItem from './pages/SearchItem';
import Offer from './mockup/MockOffer';
function App() {
  return (
    <>
      <Router>
        <Navbar index id="1" />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='search-item' element={<SearchItem />} />
          <Route path='/product' element={<PerticularProduct />} />
          <Route element={<CategoryNavbar />} >
            <Route index path='/fruits' element={<CategoryItem />} />
            <Route exact path='/breakfast' element={<CategoryItem2 />} />
            <Route exact path='/munchies' element={<CategoryItem2 />} />
            <Route exact path='/cold-drink' element={<CategoryItem />} />
            <Route exact path='/food' element={<CategoryItem2 />} />
            <Route exact path='/tea' element={<CategoryItem />} />
            <Route exact path='/bakers' element={<CategoryItem2 />} />
            <Route exact path='/beauty' element={<CategoryItem />} />
            <Route exact path='/sweet' element={<CategoryItem2 />} />
            <Route exact path='/paan' element={<CategoryItem />} />
            <Route exact path='/aata' element={<CategoryItem2 />} />
            <Route exact path='/baby-care' element={<CategoryItem />} />
            <Route exact path='/home-office' element={<CategoryItem2 />} />
            <Route exact path='/personal-care' element={<CategoryItem />} />
            <Route exact path='/pet-care' element={<CategoryItem2 />} />
          </Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;

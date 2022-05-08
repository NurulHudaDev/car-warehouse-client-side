import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import ManageItems from './Pages/ManageItems/ManageItems';
import AddItem from './Pages/AddItem/AddItem';
import MyItems from './Pages/MyItems/MyItems';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import Footer from './Pages/Shared/Footer/Footer';
import Product from './Pages/Product/Product';

function App() {
  
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/manage-items' element={<ManageItems/>}></Route>
        <Route path='/add-item' element={<AddItem/>}></Route>
        <Route path='/my-items' element={<MyItems/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
      <Product></Product>
      <Footer></Footer>
    </div>
  );
}

export default App;

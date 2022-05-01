import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Blogs from './components/Pages/Blogs/Blogs';

import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import RequireAuth from './components/Pages/Login/RequireAuth/RequireAuth';
import NotFound from './components/Pages/NotFound/NotFound';
import Signup from './components/Pages/SignUp/SignUp';
import UpdatedOne from './components/Pages/UpdatedOne/UpdatedOne';
import UpdataFurniture from './components/Pages/UpdateFunrniture/UpdataFurniture';
import Footer from './components/SharedPages/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={
          <RequireAuth>
            <Home></Home>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/inventory/:furnitureId' element={<UpdataFurniture></UpdataFurniture>}></Route>
        <Route path='updateOne' element={
          <RequireAuth>
            <UpdatedOne></UpdatedOne>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      
      
    </div>
  );
}

export default App;

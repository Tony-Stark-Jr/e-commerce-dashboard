import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';
import Products from './Components/Products';
import UpdateProduct from './Components/UpdateProduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route element={<PrivateComponent />}>

            <Route path='/' element={<Products/>} />
            <Route path='/add' element={<AddProduct/>} />
            <Route path='/update/:id' element={<UpdateProduct/>} />
            <Route path='/logout' element={<h1>Product Listing Component</h1>} />
            <Route path='/profile' element={<h1>Profile</h1>} />

          </Route>


          <Route path='/signup' element={<SignUp />} />

          <Route path='/login' element={<Login />} />

        </Routes>





      </BrowserRouter>
      <Footer />
    </div >
  );
}

export default App;

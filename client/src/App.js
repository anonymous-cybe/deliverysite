import {BrowserRouter, Route,Routes} from 'react-router-dom'
import './App.css'
import AddProduct from './pages/customerpage/AddProduct';
import CustomerPage from "./pages/customerpage/customerPage.js";
import Homepage from "./pages/homepage/Homepage";
import Login from './pages/loginpage/Login';
import Signup from './pages/signuppage/Signup';


function App() {
  return (
    <div className="App">            

      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Homepage/>}/>
        <Route path='/customer' element={<CustomerPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/add' element={<AddProduct/>}/>
      </Routes>
      </BrowserRouter> 
      
    </div>
  );
}

export default App;

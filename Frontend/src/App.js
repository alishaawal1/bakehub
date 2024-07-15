import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Navbar from './components/Navbar';

// for showing toast messages
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminEditProduct from './pages/admin/AdminEditProduct';
import AdminRoutes from './protected/AdminRoutes';
import UserRoutes from './protected/UserRoutes';
import LandingPage from './pages/LandingPage';

import Profile from './pages/Profile';


import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import Terms from './pages/TermsofService';
import Privacy from './pages/Privacy';

// import Reset from './pages/Passwordreset';

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/home' element={<Homepage />} />
        <Route path='/landingpage' element={<LandingPage/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
    
       
        {/* <Route path='/passwordreset' element={<Reset/>}/> */}
        <Route path='/contactus' element={<ContactUs/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/terms' element={<Terms/>} />
        <Route path='/privacy' element={<Privacy/>} />

        <Route element={<UserRoutes/>}>
          <Route path='/profile' element={<Profile/>} />
        </Route>
        
      
        

        <Route element={<AdminRoutes />}>
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path='/admin/edit/:id' element={<AdminEditProduct />} />
          {/* <Route path='/admin/editservices/:id' element={<AdminEditServices/>} /> */}

        </Route>
        
        
            
           
          
            </Routes>
            <Footer/>
    </Router>
  );
}


export default App;

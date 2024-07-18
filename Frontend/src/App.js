import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Switch } from 'react-router';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminEditProduct from './pages/admin/AdminEditProduct';
import AdminRoutes from './protected/AdminRoutes';
import UserRoutes from './protected/UserRoutes';
import Profile from './pages/Profile';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import Terms from './pages/TermsofService';
import Privacy from './pages/Privacy';
import Dashboard from './pages/Dashboard';
import Cakes from './pages/Cakes';
import AddToCartPage from './pages/AddToCartPage'; // Adjusted import name
import Description from './pages/BuyNowPage'; // Ensure you have this component
import { CartProvider } from './pages/CartContext'; // Ensure you have CartContext defined
import BuyNowPage from './pages/BuyNowPage';
import Bagel from './pages/Bagel';
import Cookies from './pages/Cookies';
import Croissant from './pages/Croissant';
import Donut from './pages/Donut';
import Pastries from './pages/Pastries';
import Faq from './pages/Faq';

function App() {
  return (
    <Router>
      <Navbar/>
      <ToastContainer />
    
      <CartProvider>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/home' element={<Dashboard />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cakes' element={<Cakes />} />
          <Route path='/addtocart' element={<AddToCartPage />} />
          <Route path='/cakes/:id/buynow' element={<BuyNowPage cakes={Cakes} />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/categories/bagel' element={<Bagel />} />
          <Route path='/categories/cookies' element={<Cookies/>} />
          <Route path='/categories/croissant' element={<Croissant />} />
          <Route path='/categories/donuts' element={<Donut />} />
          <Route path='/categories/pastries' element={<Pastries />} />
          <Route element={<UserRoutes />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route element={<AdminRoutes />}>
            <Route path='/admin/dashboard' element={<AdminDashboard />} />
            <Route path='/admin/edit/:id' element={<AdminEditProduct />} />
          </Route>
          <Route path="/cart" element={<AddToCartPage />} />
          <Route path="/cakes/:id/buynow" element={<Description />} />
        </Routes>
      </CartProvider>
      <Footer/>
    </Router>
  );
}

export default App;

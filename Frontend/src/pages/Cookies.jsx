import React, { useState } from 'react';
import '../style/cakes.css'; // Adjust path as per your project structure
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; // Assuming you have a CartContext

// Define your cake images (assuming you have these imports correctly set up)

import cookies1 from '../images/cookies1.jpeg'
import cookies2 from '../images/cookies2.jpeg'
import cookies3 from '../images/cookies3.jpeg'
import cookies4 from '../images/cookies4.jpeg'
import cookies5 from '../images/cookies5.jpeg'
import cookies6 from '../images/cookies6.jpeg'
import cookies7 from '../images/cookies7.jpeg'
import cookies8 from '../images/cookies8.jpeg'
import cookies9 from '../images/cookies9.jpeg'



import AddToCartPage from './AddToCartPage';
import BuyNowPage from './BuyNowPage';

const CakeModal = ({ cake, onClose, onAddToCart, onBuyNow }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <h2>{cake.name}</h2>
      <img src={cake.image} alt={cake.name} className="modal-image" />
      <p>{cake.description}</p>
      <p className="modal-price">Price: Rs {cake.price} per piece</p>
      <div className="modal-buttons">
        <button onClick={() => onAddToCart(cake)}>Add to Cart</button>
        <Link to={`/cakes/${cake.id}/buynow`}><button>Buy Now</button></Link>
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

const CakeCard = ({ cake, onClickCake, onAddToCart }) => (
  <div className="cake-card">
    <div className="clickable" onClick={() => onClickCake(cake)}>
      <img src={cake.image} alt={cake.name} className="cake-image" />
      <h3>{cake.name}</h3>
    </div>
    <p className="price-info">
      Per piece <span className="price">Rs {cake.price}</span>
    </p>
    <div className="button-group">
      <button className="add-to-cart" onClick={() => onAddToCart(cake)}>
        Add to cart
      </button>
      <Link to={`/cakes/${cake.id}/buynow`}><button className="buy-now">Buy Now</button></Link>
    </div>
  </div>
);

const CakeSection = ({ title, cakes, onClickCake, onAddToCart }) => (
  <div className="cake-section">
    <h2>{title}</h2>
    <div className="cake-grid">
      {cakes.map((cake, index) => (
        <CakeCard
          key={index}
          cake={cake}
          onClickCake={onClickCake}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  </div>
);

const Cookies = () => {
  const [selectedCake, setSelectedCake] = useState(null);
  const [currentPage, setCurrentPage] = useState('catalog');
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const cookies = [
    { id: 1, image: cookies1, name: 'Strawberry', price: '1045' },
    { id: 2, image: cookies2, name: 'Vanilla', price: '1045' },
    { id: 3, image: cookies3, name: 'Rainbow', price: '1045' },
    { id: 4, image: cookies4, name: 'Cheese', price: '1045' },
    { id: 5, image: cookies5, name: 'Pineapple', price: '1045' },
    { id: 6, image: cookies6, name: 'Vanilla', price: '1045' },
    { id: 7, image: cookies7, name: 'Rainbow', price: '1045' },
    { id: 8, image: cookies8, name: 'Cheese', price: '1045' },
    { id: 9, image: cookies9, name: 'Pineapple', price: '1045' },
  ];
  
  const handleClickCake = (cake) => {
    setSelectedCake(cake);
  };

  const handleAddToCartClick = (cake) => {
    addToCart(cake);
    navigate('/cart');
  };

  const handleBackToCatalog = () => {
    setCurrentPage('catalog');
    setSelectedCake(null);
  };

  if (currentPage === 'addToCart') {
    return <AddToCartPage cake={selectedCake} onBack={handleBackToCatalog} />;
  }

  if (currentPage === 'buyNow') {
    return <BuyNowPage cake={selectedCake} />;
  }

  return (
    <div className="cakes-catalog">
      <CakeSection
        title="Cookies"
        cakes={cookies}
        onClickCake={handleClickCake}
        onAddToCart={handleAddToCartClick}
      />
      
      {selectedCake && currentPage === 'catalog' && (
        <CakeModal
          cake={selectedCake}
          onClose={() => setSelectedCake(null)}
          onAddToCart={handleAddToCartClick}
        />
      )}
    </div>
  );
};

export default Cookies;

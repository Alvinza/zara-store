
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Provider } from 'react-redux'; // Import Provider from react-redux
import { CartProvider } from './context/CartContext';
import store from './redux/store'; // Import the Redux store



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}> 
    <CartProvider>
        <BrowserRouter> {/* Wrap App with BrowserRouter for routing */}
            <App />
        </BrowserRouter>
        </CartProvider>
        </Provider>
   
);

reportWebVitals();

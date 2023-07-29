// import logo from './logo.svg';
// // import './App.css';
// import Header from "./components/header";

import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import CartButton from './components/cartButton';
import Header from './components/header';



function App() {
  return (
    <Provider store={store}>
      <Header />
      <div>
        {/* Product information and other components */}
        <CartButton product={{ id: 1, name: 'Sample Product', price: 10 }} />
      </div>
    </Provider>

  );
}

export default App;

import React from 'react';
import './App.css';
import ProductList from './components/list';
import ProductForm from './components/form'

function App() {
  return (
  <div className="App">
    <ProductList />
    <ProductForm />
  </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import  FilterableProductTable  from './components/FilterableProductTable';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <h1>Ironstore</h1>
      <FilterableProductTable products={data} />
    </div>
  );
}

export default App;

//props saved into state
//send down to next, repeat

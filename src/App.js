import React from 'react';
import dataJSON from './data.json';
import './App.css';

import FilterableProductTable from './components/FilterableProductTable.jsx';

export default function App() {
  return (
    <div className="App">
      <div className="App">
        <FilterableProductTable products={dataJSON.data} />
      </div>
    </div>
  );
}

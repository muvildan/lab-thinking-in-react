import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default function FilterableProductTable(props) {

const {products} = props

  return (
    <div>
      <h1> IronStore </h1>
      <SearchBar />
      <ProductTable products={products}/>
    </div>
  );
}

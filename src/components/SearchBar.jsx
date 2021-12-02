import React, { useState } from 'react';

export default function SearchBar() {
  return (
    <div>
      <h4>Search</h4>
      <input
        // onChange={handleInput}
        type="search"
        name="search"
        // value={string}
      />
    </div>
  );
}

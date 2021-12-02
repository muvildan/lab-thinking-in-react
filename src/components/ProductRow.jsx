import React, { useState } from 'react';

export default function ProductRow(props) {
  const { product } = props;

  return (
    <tr>{!product.stocked ? 
      <td className="no-stock">{product.name}</td>
      :
    <td>{product.name}</td>
    }
      <td> {product.price} </td>
    </tr>
  );
}

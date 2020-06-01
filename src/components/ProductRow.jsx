import React from 'react';
import './../App.css';

const ProductRow = (props) => {
  return (
    <table>
      <td>{props.name} |</td>
      <td>{props.category} |</td>
      <td>{props.stocked}</td>
      <td>{props.price}</td>
    </table>
  );
};

export default ProductRow;

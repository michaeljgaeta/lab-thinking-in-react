import React from 'react';
import ProductRow from './ProductRow';
import './../App.css';

const ProductTable = (props) => {
  //this components will recieve from props both the products and the search query
  console.log(props.products);
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Stocked</th>
          <th>Price</th>
        </tr>
      </table>
      {props.products.map((product) => {
        return (
          /*
          <ProductRow
            category={product.category}
            stocked={product.stocked}
            name={product.name}
            price={product.price}
          />
          */
          <ProductRow {...product} />
        );
      })}
    </div>
  );
};

export default ProductTable;

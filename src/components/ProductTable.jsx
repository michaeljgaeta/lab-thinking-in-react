import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
  //this components will recieve from props both the products and the search query
  console.log(props.products);
  return (
    <div>
      <h1>Im the table</h1>
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

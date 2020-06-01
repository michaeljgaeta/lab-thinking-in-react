import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products.data,
      searchQuery: '',
    };
  }
  render() {
    //console.log(this.state.products);
    const products = this.state.products
    return (
      <div>
        <h1>Im the filterable products table</h1>
        <SearchBar />
        <ProductTable products={products} />
      </div>
    );
  }
}

export default FilterableProductTable;

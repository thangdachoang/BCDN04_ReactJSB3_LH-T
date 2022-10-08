import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class Productlist extends Component {

    renderShoe = () => {
        return this.props.data.map((shoe) => {
            return (
                <ProductItem
                    getShoeDetail={this.props.getShoeDetail}
                    key={shoe.id}
                    shoe={shoe}
                />
            );
        });
    };
  render() {
    return (
      <div className='row'>
        {this.renderShoe()}
      </div>
    )
  }
}

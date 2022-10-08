import React, { Component } from 'react'
import data from '../data/data.json'
import Modal from './Modal';
import ProductList from './ProductList';
export default class ShoeStore extends Component {
    state ={ productDetail: "shoe"}
    getShoeDetail = (id) => {
        this.setState({
            productDetail: data.find((item) => {
                return id === item.id;
            }),
        });
    };
  render() {
    return (
      <div className='container'>
        <h1>Shoes Store</h1>
        <ProductList getShoeDetail={this.getShoeDetail} data={data}/>
        <Modal content={this.state.productDetail}/>
      </div>
    )
  }
}

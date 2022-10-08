import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let { shoe, getShoeDetail } = this.props;
        let { id, name, price, image } = shoe;
        return (
            <div className='col-4'>
                <div className="card">
                    <img className="card-img-top" src={image}  style={{height: "216px"}} alt=""/>
                    <div className="card-body">
                        <p style={{fontWeight:"bold"}} className="card-title">
                            {name}
                        </p>
                        <p className="card-text">{price}$</p>
                        <button
                            onClick={() => {
                                getShoeDetail(id);
                            }}
                            data-toggle="modal"
                            data-target="#modelId"
                            className="btn btn-dark"
                        >
                            View Detail
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

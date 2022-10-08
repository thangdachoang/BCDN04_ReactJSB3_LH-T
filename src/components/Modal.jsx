import React, { Component } from "react";

export default class Modal extends Component {
    render() {
        let { content } = this.props;
        let { name, alias, description, image, price } = content;
        return (
            <div>
                <div
                    className="modal fade"
                    id="modelId"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="modelTitleId"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header py-0">
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body py-0">
                                <div className="row align-items-center">
                                   <div className="col-6">
                                   <img className="card-img-top" src={image} alt=""/>
                                   </div>
                                   <div className="col-6">
                                    <h1>{name}</h1>
                                    <h2>{alias}</h2>
                                    <p>{description}</p>
                                    <span>${price}</span>
                                   </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

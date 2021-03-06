import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                { value => {
                    const { id, company, img, info, price, title, inCart } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className='row'>

                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">

                                    <h1>{title}</h1>
                                </div>

                                {/* end of title block */}
                                <div className="row text-center">
                                    <div className="col-10 mx-auto col-md-6 my-3 text-center">
                                        <img src={img} alt="" className="img-fluid text-center" />

                                    </div>

                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <h1>Model: {title}</h1>
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                            made by: <span className="text-uppercase">{company}</span>
                                        </h4>

                                        <h4 className="text-blue">
                                            price:<span>  $</span>
                                            {price}
                                        </h4>

                                        <p className="text-capitalize text-wrap font-weight-bold mt-3 mb-0">
                                            some info about product:
                                        </p>

                                        <p className="text-muted lead">
                                            {info}
                                        </p>

                                        <div>
                                            <Link to='/'>
                                                <ButtonContainer>
                                                    back to products
                                                </ButtonContainer>
                                            </Link>
                                            <ButtonContainer
                                                disabled={inCart ? true : false}
                                                onClick={() => {
                                                    console.log(id);
                                                    value.addToCart(id);
                                                    value.openModal(id);
                                                }}
                                            >
                                                {inCart ?
                                                    "inCart" : "add to cart"}
                                            </ButtonContainer>
                                        </div>

                                    </div>


                                </div>



                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

const ButtonContainer = styled.button`
text-transform:  capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid var(--lightBlue);
border-color:${props =>
        props.cart ? "var(--mainYellow)" : "var(--lightBlue)"
    };
color:${props =>
        props.cart ? "var(--mainYellow)" : "var(--lightBlue)"
    };
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5 ease-in-out;


&:hover{
    background: var(--lightBlue);
    color: var(--mainBlue);
}
&:focus{
    outline: none;
}

`

import React, { Component } from 'react'
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';


export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct;

                    if (!modalOpen) {
                        return null;
                    }
                    else {
                        return (
                            <ModalContainer>
                                <div id="modal" className="container">
                                    <div className="row">
                                        <div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                            <h5>Item added to the Cart</h5>
                                            <img src={img} className="img-fluid" />
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">price: $ {price}</h5>
                                        </div>
                                        <Link className="text-center" to='/'>
                                            <ButtonContainer onClick={() => {
                                                closeModal()
                                            }}>
                                                Store
                                            </ButtonContainer>
                                        </Link>

                                        <Link className="text-center" to='/cart'>
                                            <ButtonContainer onClick={() => {
                                                closeModal()
                                            }}>
                                                Go To Cart
                                            </ButtonContainer>
                                        </Link>

                                    </div>
                                </div>
                            </ModalContainer>
                        );
                    }
                }}
            </ProductConsumer>
        )
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

const ModalContainer = styled.div`
position: fixed;
top:0;
left:0;
right:0;
bottom: 0;
background: rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: center;
#modal{
    background: var(--mainWhite);
}
`
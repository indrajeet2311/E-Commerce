import React, { Component } from 'react';
import logo from "../logo.svg";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default class NavBar extends Component {

    render() {
        return (
            <NavWrapper className="navbar navbar-expand-lg navbar-light bg-light">

                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand mr-auto" />
                </Link>

                <ul className="navbar-nav me-auto mb-10 mb-lg-0">
                    <li className="nav-item ml-5 text-center">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>

                </ul>

                <Link to="/cart" className="me-2">
                    <ButtonContainer>
                        <span className="me-2">
                            <i className="fas fa-cart-plus">  </i>
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>

            </NavWrapper>
        )


    }



}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize !important;
}

`;



const ButtonContainer = styled.button`
text-transform:  capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid var(--lightBlue);
color: var(--lightBlue);
border-radius: 0.5rem;
padding: 0.2 rem;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5 ease-in-out;
`
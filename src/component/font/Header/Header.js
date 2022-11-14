import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import {FaCartPlus} from 'react-icons/fa'

const Header = () =>{
    return (
        <header className="header">
            <div>
                <h1>
                    <Link to="/" className="logo">
                        Electronics Shop
                    </Link>
                </h1>
            </div>
            <div className="header-links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to="/Signup">Signup</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to="/cart" className="cart">
                        <FaCartPlus/>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
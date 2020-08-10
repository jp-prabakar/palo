import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                <img className="ui small image" src="/palo-it.png" />
            </Link>
        </div>
    );
}

export default Header;
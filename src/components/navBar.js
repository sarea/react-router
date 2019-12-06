import React from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends React.Component {
    render () {
        return (
            <div>
                <Link to="/">Home </Link>
                <Link to="/about">about </Link>
                <Link to="/classes">classes</Link>
            </div>
        )
    }
}
import React from 'react';
import {Link, Route} from 'react-router-dom';
import NavBar from './navBar';
import SingleClass from './singleClass';

export default class Classes extends React.Component {
    render () {
        const { match, history } = this.props;
        console.log('match in Classes: ', match);
        return (
        <div>
            <NavBar />
            <h1>Classes</h1>
            <ul>
                <li><Link to={`${match.url}/class-19`}>class-19</Link></li>
                <li><Link to={`${match.url}/class-20`}>class-20</Link></li>
                <li><Link to={`${match.url}/class-21`}>class-21</Link></li>
            </ul>
            <Route path={`${match.path}/:classId`} component={SingleClass}/>
        </div>
    );
    }
}
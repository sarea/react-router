import React from 'react';

export default class SingleClass extends React.Component {
    render () {
        const {match} = this.props;
        console.log('match in SingleClass: ', match);
        return (
        <div>
            <h1>Hello {match.params.classId}</h1>
        </div>
    );
    }
}
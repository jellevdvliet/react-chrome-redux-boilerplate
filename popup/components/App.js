import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props);
        return (
            <div className='App'>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
    };
};

export default connect(mapStateToProps)(App);

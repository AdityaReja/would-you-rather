import React, {Component} from 'react'
import Login from '../components/login';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }
    render () {
        return (
            <Login/>
        )
    }
 }

 export default connect()(App);
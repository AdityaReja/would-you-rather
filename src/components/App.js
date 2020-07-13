import React, { Component , Fragment} from 'react'
import Login from '../components/login';
import LoggedIn from '../components/LoggedIn'
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }
    render() {
        const {authUsers} = this.props
        return (
            <Fragment>
                {!authUsers ? <Login /> : <LoggedIn />}
            </Fragment>);
    }
}

function mapStatetoProp({ authUsers }) {
    return {
        authUsers
    }
}

export default connect(mapStatetoProp)(App)
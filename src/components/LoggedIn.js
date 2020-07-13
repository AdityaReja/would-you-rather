import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import NotFound from '../components/NotFound'
import Questions from '../components/Questions'
import NewQuestion from '../components/NewQuestion'
import HomePage from '../components/HomePage'
import Nav from '../components/Nav'
import LeaderBoard from '../components/LeaderBoard'

class LoggedIn extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Nav />
                    <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/questions/:id" component={Questions} />
                    <Route path="/add" component={NewQuestion} />
                    <Route path="/leaderboard" component={LeaderBoard} />
                    <Route component={NotFound} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default LoggedIn
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { reSetAuthUser } from '../actions/authUsers';
import Image from 'react-bootstrap/Image';

class Navigation extends Component {

    render() {
        const { user, dispatch } = this.props;

        const logout = () => {
            dispatch(reSetAuthUser());
        };
        return (
            <Fragment>
                <Navbar expand="lg" bg="light" variant="light" className="my-3 border">
                    <Navbar.Brand as={Link} to="/">
                        <h2>
                            <small>WYR...?</small>
                        </h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={NavLink} to="/" exact>
                                Home
						</Nav.Link>
                            <Nav.Link as={NavLink} to="/add">
                                New Question
						</Nav.Link>
                            <Nav.Link as={NavLink} to="/leaderboard">
                                Leaderboard
						</Nav.Link>
                        </Nav>
                        <Nav className="align-items-start">
                            <Navbar.Text>{user.name}</Navbar.Text>
                            <Image
                                src={user.avatarURL}
                                roundedCircle
                                fluid
                                width="40"
                                height="40"
                                className='mr-2'
                                alt="user avatar"
                            />
                            <Button
                                variant="outline-dark"
                                onClick={logout}
                                className="mt-3 mt-lg-0"
                            >
                                Logout
						</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        )
    }
}

function mapStateToProps({ users, authUsers }) {
    return {
        user: users[authUsers]
    };
}

export default connect(mapStateToProps)(Navigation);
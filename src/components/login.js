import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  setAuthUser  from '../actions/authUsers';

class Login extends Component {
    state = {
		errorMessage: ''
	};

	onSubmit = (e) => {
		const userID = this.userID.value;
		const { dispatch } = this.props;

		e.preventDefault();

		if (userID !== '') {
			dispatch(setAuthUser(userID));
		} else {
			this.setState({ errorMessage: 'You must choose a Users' });
		}
	};

	render() {
		const { users } = this.props;
		const { errorMessage } = this.state;

		return (
			<Row className="justify-content-center align-items-center min-vh-100">
				<Col xs={12} md={4}>
					<Card bg="light" className="text-center">
						<Card.Header>Login</Card.Header>
						<Card.Body>
							<Form onSubmit={this.onSubmit}>
								<Form.Group controlId="formGridState">
									<Form.Label>Users</Form.Label>
									{errorMessage ? (
										<p className="text-danger">{errorMessage}</p>
									) : null}

									<Form.Control
										as="select"
										ref={(id) => (this.userID = id)}
									>
										<option value="">Select user</option>
										{users.map((item) => (
											<option value={item.value} key={item.value}>
												{item.label}
											</option>
										))}
									</Form.Control>
								</Form.Group>

								<Button type="submit" variant="outline-dark">
									Login
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		);
	}
}


function mapStateToProps({ users }) {
	return {
		users: Object.keys(users).map((id) => ({
			value: id,
			label: users[id].name
		}))
	};
}

export default connect(mapStateToProps)(Login)

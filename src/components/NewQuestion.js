import React, { Component , Fragment} from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/question'
import { Redirect } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class NewQuestion extends Component {
    state = {
        one: '',
        two: '',
        toHome: false
    };
    onInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    };

    onSubmit = (e) => {
        const { one, two } = this.state;
        const { dispatch } = this.props;

        e.preventDefault();

        this.setState(
            {
                one: '',
                two: '',
                toHome: true
            },
            () => dispatch(handleAddQuestion(one, two))
        );
    };
    render() {
        const { one, two, toHome } = this.state;

		if (toHome === true) return <Redirect to="/" />;
        return (
            <Fragment>
                <h2 className="text-center my-3">
                    <small>Would You Rather...</small>
                </h2>
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        <Card bg="light" className="m-3 text-center">
                            <Card.Body>
                                <Form onSubmit={this.onSubmit}>
                                    <Form.Group controlId="one">
                                        <Form.Label>Choice One</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="one"
                                            value={one}
                                            onChange={this.onInputChange}
                                        />
                                    </Form.Group>
                                    <h3>
                                        <small>OR</small>
                                    </h3>
                                    <Form.Group controlId="two">
                                        <Form.Label>Choice Two</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="two"
                                            value={two}
                                            onChange={this.onInputChange}
                                        />
                                    </Form.Group>
                                    <Button
                                        type="submit"
                                        variant="outline-dark"
                                        disabled={one === '' || two === ''}
                                    >
                                        Submit
									</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

export default connect()(NewQuestion)
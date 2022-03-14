import React, { Component } from "react";
import Footer from './footerComponent';
import Location from "./mapComponent";
import { Form, FormGroup, Input, Button, Card, Col } from 'reactstrap';

class Message extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(input) {
        alert('Submitted Form' + JSON.stringify(this.state));
        input.preventDefault();
    }

    handleInputChange(event) {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState(
            {
                [name]: value
            }
        );
    }

    render() {
        return (
            <React.Fragment>
                <div className="container message-container">
                    <div className="row">
                        <Card className="col-12 col-md-5 mt-3">
                            <div>
                                <h4 className="mt-2">Send Feedback</h4>
                            </div>
                            <div>

                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup row>
                                        <Col md={11}>
                                            <Input type='text' name='name' placeholder="Name"
                                                value={this.state.name} onChange={this.handleInputChange}></Input>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md={11}>
                                            <Input type='email' name='email' placeholder="Email"
                                                value={this.state.email} onChange={this.handleInputChange}></Input>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md={11}>
                                            <Input type='textarea' name='message' placeholder="Message" rows='10'
                                                value={this.state.message} onChange={this.handleInputChange}></Input>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col>
                                            <Button type='submit' color='primary'>Send</Button>
                                        </Col>
                                    </FormGroup>

                                </Form>

                            </div>
                        </Card>


                        <Card className="col-12 col-md-5 offset-md-1 mt-3">
                            <Location />
                        </Card>

                    </div>
                </div>

                <Footer containerStyle={{ position: 'fixed', bottom: 0 }} />

            </React.Fragment>

        );
    }
}

export default Message;
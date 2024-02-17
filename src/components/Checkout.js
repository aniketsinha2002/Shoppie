import React from 'react';
import { Card, Form, Row, Col } from 'react-bootstrap';
import Header from './Header';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Checkout = () => {
    const items = useSelector(state => state.cart)
    const total = items.reduce((a, b) => a + b.price, 0)
    
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="row justify-between">
                    <div className="col-md-6">
                        <Card className="p-4">
                            <h3>Billing address</h3>
                            <Form>
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control placeholder="First name" />
                                    </Col>
                                    <Col>
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control placeholder="Last name" />
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="1234 Main St" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGridAddress2">
                                    <Form.Label>Address 2 (Optional)</Form.Label>
                                    <Form.Control placeholder="Apartment or suite" />
                                </Form.Group>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCountry">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Control as="select" defaultValue="Choose...">
                                            <option>Choose...</option>
                                            {/* Add country options here */}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control as="select" defaultValue="Choose...">
                                            <option>Choose...</option>
                                            {/* Add state options here */}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                                </Row>
                            </Form>
                        </Card>
                    </div>
                    <div className="col-md-4">
                      <Card className=''>
                        <div className="order-summary px-4">
                            <h3 className='py-2'>Order Summary</h3>
                            <div className='py-2'>Products ({items.length}): ${total}</div>
                            <div className='py-2'>Shipping: $30</div>
                            <div className='py-4 font-semibold'>Total amount: ${(total + 30).toFixed(2)}</div>
                            <div className='py-4'><Link to="/success" className=''><button className='bg-blue-600 text-white p-2 rounded-md py-2'>Confirm Order</button></Link></div>
                        </div>
                       </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

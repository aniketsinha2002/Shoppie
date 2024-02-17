import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../redux/slices/cartSlice';
import Header from './Header';
import CartEmpty from './CartEmpty'
import { Link } from "react-router-dom";

const Cart = () => {
    const items = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const removefromCart = (id) => {
        dispatch(deleteItem(id));
    };

    const total = items.reduce((a, b) => a + b.price, 0);
    
    return (
        <div>
            <Header />
            {items.length === 0 ? (
                <CartEmpty/>
            ) : (
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            {items.map((product, index) => (
                                <div key={index} style={{ maxWidth: '400px' }}>
                                    <Card className="m-2 p-2">
                                        <div className="d-flex flex-row align-items-center">
                                            <Card.Img
                                                variant="top"
                                                src={product.image}
                                                style={{ height: '150px', width: '100px', objectFit: 'cover' }}
                                            />
                                            <div className="ml-3 d-flex flex-column">
                                                <h6 className="overflow-hidden text-ellipsis text- text-sm mb-1">{product.title}</h6>
                                                <div className="d-flex flex-col">
                                                    <span className="mr-2">$ {product.price}</span>
                                                    <Button className="m-2 p-2" variant="danger" onClick={() => removefromCart(index)}>
                                                        Remove
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-3">
                      <Card>
                         <div className="order-summary px-4">
                            <h3 className='py-2'>Order Summary</h3>
                            <div className='py-2'>Products ({items.length}): ${total}</div>
                            <div className='py-2'>Shipping: $30</div>
                            <div className='py-4 font-semibold'>Total amount: ${(total + 30).toFixed(2)}</div>
                            <div className='py-4'><Link to="/checkout" className=''><button className='bg-blue-600 text-white p-2 rounded-md py-2'>Checkout</button></Link></div>
                        </div>
                      </Card>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;

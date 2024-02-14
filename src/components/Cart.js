import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem,deleteItem } from '../redux/slices/cartSlice';
import { UseSelector } from 'react-redux';
import Header from './Header';

const Cart = () => {
     const dispatch = useDispatch();
  const removefromCart = (id) => {
        //dispATCh
        dispatch(deleteItem(id))
    }

  const products = useSelector(state=>state.cart)  
  console.log(products)
  const cards = products.map((product,index) => (
        <div className='col-md-2'>
            <Card className="m-2 p-2 w-45">
            <Card.Img variant="top" src={product.image} className="w-[100px] h-[220px]"/>
            <Card.Body>
                <Card.Title className="overflow-hidden text-ellipsis text-nowrap">{product.title}</Card.Title>
                    <Card.Text>$ {product.price}</Card.Text>
                    <Button className="m-2 p-2 w-40" variant="danger" onClick={() => removefromCart(index)}>Remove from Cart</Button>
            </Card.Body>
            </Card>
        </div>
  ))
    
  return (
    <div>
        <Header/>
          <div className='row'>
            {cards}
        </div>
    </div>
    
  )
}

export default Cart
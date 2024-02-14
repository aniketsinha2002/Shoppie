import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItem,deleteItem } from '../redux/slices/cartSlice';

function BasicExample() {

    const dispatch = useDispatch();

    const [allProducts, setallProducts] = useState([]);
    useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then(data => data.json())
    .then(result => setallProducts(result))    
    }, []);

    const removefromCart = (id) => {
        //dispATCh
        dispatch(deleteItem(id))
    }

    const cards = allProducts.map(product => (
        <div className='col-md-2'>
            <Card className="m-2 p-2 w-45">
            <Card.Img variant="top" src={product.image} className="w-[100px] h-[220px]"/>
            <Card.Body>
                <Card.Title className="overflow-hidden text-ellipsis text-nowrap">{product.title}</Card.Title>
                    <Card.Text>$ {product.price}</Card.Text>
                <Button className="m-2 p-2 w-30" variant="primary" onClick={()=>dispatch(addItem({id:product.id, name:product.title, price: product.price, title:product.title, image: product.image}))}>Add to Cart</Button>
            </Card.Body>
            </Card>
        </div>
    ))
  return (
    <div className='row'>
        {cards}
    </div>
  );
}

export default BasicExample;
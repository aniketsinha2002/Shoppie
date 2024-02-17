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
            <Card.Img variant="top" src={product.image} className="w-[150px] h-[150px]"/>
            <Card.Body>
                <h6 className="overflow-hidden text-ellipsis text-nowrap">{product.title}</h6>
                    <Card.Text>$ {product.price}</Card.Text>
                <Button className="m-0 p-2 w-30" variant="primary" onClick={()=>dispatch(addItem({id:product.id, name:product.title, price: product.price, title:product.title, image: product.image}))}>Add to Cart</Button>
            </Card.Body>
            </Card>
        </div>
    ))
  return (
    <div className='row p-5'>
        {cards}
    </div>
  );
}

export default BasicExample;
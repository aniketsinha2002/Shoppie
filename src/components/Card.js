import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react'
import Loader from "./Loader"
import { useDispatch } from 'react-redux';
import { addItem,deleteItem } from '../redux/slices/cartSlice';

function BasicExample() {

    const dispatch = useDispatch();
    const [limit, setLimit] = useState(6)
    const [allProducts, setallProducts] = useState([]);
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${limit}`)
    .then(data => data.json())
    .then(result => {
        setallProducts(result);
        setLoading(false); // Set loading to false after data is fetched
    })
    .catch(error => console.error('Error fetching data:', error));
    
    if(allProducts.length===20) setLoading(false);
        
}, [limit]);


    //scroll event
    const handleScroll = () => {
        // console.log("Height" + document.documentElement.scrollHeight) //whole height
        // console.log("ScrollTop" + document.documentElement.scrollTop) -> No of pixels user has scrolled
        // console.log(window.innerHeight) -> dynamic browser height

        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight)
        {
            setLoading(true)
            setLimit(prev => prev + 2);    
        }

         
    }

    //add event listener // remove
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    },[])


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
          {Loading && <Loader />}
  </div>
);
}

export default BasicExample
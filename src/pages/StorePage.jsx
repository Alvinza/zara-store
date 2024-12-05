import React from "react";
import { useCart } from "../context/CartContext";
import { Card } from 'react-bootstrap';

// images
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.jpg";
import pic5 from "../assets/jean.webp";
import pic6 from "../assets/milano.webp";
import dressOne from "../assets/dressOne.webp";
import dressTwo from "../assets/dressTwo.webp";
import dressThree from "../assets/dressThree.webp";
import dressFour from "../assets/dressFour.webp";
import suit from "../assets/suit.webp";
import newPic1 from '../assets/newPic1.png';
import newPic2 from '../assets/newPic2.png';
import newPic3 from '../assets/newPic3.png';
import newPic4 from '../assets/newPic4.png';
import newPic5 from '../assets/newPic5.png';
import newPic6 from '../assets/newPic6.png';
import newPic7 from '../assets/newPic7.png';
import newPic8 from '../assets/newPic8.png';


function StorePage() {
    const { addToCart } = useCart();
    const products = [
        {
            id: 1,
            name: "Black suit",
            price: 2780,
            description: "Formal suit",
            image: suit,
          },
          {
            id: 2,
            name: "Leather jacket",
            price: 1200,
            description: "Black jacket",
            image: pic1,
          },
          {
            id: 3,
            name: "Jean short",
            price: 230,
            description: "Stylish jeans",
            image: pic2,
          },
          {
            id: 4,
            name: "Grey jacket",
            price: 700,
            description: "Stylish jacket",
            image: pic3,
          },
          {
            id: 5,
            name: "White jean",
            price: 700,
            description: "Stylish jeans",
            image: pic5,
          },
          {
            id: 6,
            name: "Sweater",
            price: 400,
            description: "Milano sweater",
            image: pic6,
          },
          {
            id: 7,
            name: "Color dress",
            price: 450,
            description: "Stylish dress",
            image: dressOne,
          },
          {
            id: 8,
            name: "Stripped dress",
            price: 650,
            description: "Stylish dress",
            image: dressTwo,
          },
          {
            id: 9,
            name: "Abstract dress",
            price: 450,
            description: "Stylish dress",
            image: dressThree,
          },
          {
            id: 10,
            name: "Abstract dress",
            price: 500,
            description: "Stylish dress",
            image: dressFour,
          },
          {
            id: 11,
            name: "Black pants",
            price: 600,
            description: "black panther style",
            image: newPic1,
          },
          {
            id: 12,
            name: "Jean trouser",
            price: 360,
            description: "Stylish jeans",
            image: newPic2,
          },
          {
            id: 13,
            name: "Jean",
            price: 380,
            description: "Stylish jeans",
            image: newPic3,
          },
          {
            id: 14,
            name: "Jacket Suit",
            price: 900,
            description: "Brown",
            image: newPic4,
          },
          {
            id: 15,
            name: "Winter jacket",
            price: 400,
            description: "Stylish yellow",
            image: newPic5,
          },
          {
            id: 16,
            name: "Leather jacket",
            price: 1400,
            description: "Golden brown",
            image: newPic6,
          },
          {
            id: 17,
            name: "Sweater",
            price: 220,
            description: "Golden green",
            image: newPic7,
          },
          {
            id: 18,
            name: "Denim jacket",
            price: 800,
            description: "Stylish jeans",
            image: newPic8,
          },
    ];

    return (
        // Store section, I used bootstrap for the card, I also used map method to render the products
       <div className="storeImage productsBackground">
        <h1 className='text-center'>Products</h1>
         <div className="d-flex flex-wrap products">
            {products.map(product => (
                <Card key={product.id} style={{ width: '18rem', margin: '10px' }}>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <Card.Text><b>Price: R{product.price}</b></Card.Text>
                        <button className='btn' style={{backgroundColor: '#ffb766', border: 'none'}}
                         onClick={() => {addToCart(product)}}>Add to Cart</button>
                    </Card.Body>
                </Card>
            ))}
        </div>
       </div>
    );
}

export default StorePage;



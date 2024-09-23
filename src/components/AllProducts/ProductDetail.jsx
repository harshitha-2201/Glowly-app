import React, { useState } from 'react';
import images from './ProductDetails.js';
import { useParams, useNavigate } from 'react-router-dom';
import StarBorderPurple500TwoToneIcon from '@mui/icons-material/StarBorderPurple500TwoTone';
import './productstyles.css';

const ProductDetail = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const product = images.find((item) => item.id === parseInt(productId));
    const [selectedImage, setSelectedImage] = useState(product?.imageSlider[0]?.id);

    const handleImageClick = (imageId) => {
        setSelectedImage(imageId);
    };

    const handleAddToCart = () => {
        if (product) {
            const userId = localStorage.getItem('userId'); // Get logged-in user ID
            if (!userId) {
                alert('Please log in to add items to the cart.');
                return;
            }

            // Retrieve existing cart items or initialize an empty array
            const existingCart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];

            // Add the new product to the cart
            existingCart.push({
                id: product.id,
                name: product.title,
                price: product.price,
                image: product.imageSlider[0]?.src, // Use the first image as a reference
            });

            // Store updated cart in localStorage
            localStorage.setItem(`cart_${userId}`, JSON.stringify(existingCart));
            
            alert('Product added to the Cart Successfully');
            navigate('/cart'); // Navigate to the cart page
        } else {
            alert("Product not found. Unable to add to the cart.");
        }
    };

    return (
        <div className='pro-details-container'>
            <h1 className="tag">Product Details</h1>
            <div className="product-details">
                <div className="image-list">
                    {product?.imageSlider.map((image) => (
                        <div
                            key={image.id}
                            onClick={() => handleImageClick(image.id)}
                            className={`thumbnail ${selectedImage === image.id ? 'selected' : ''}`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                            />
                        </div>
                    ))}
                </div>
                {product && (
                    <div className="details">
                        {selectedImage !== null && (
                            <div className="selected-image">
                                <img
                                    src={product.imageSlider.find((image) => image.id === selectedImage).src}
                                    alt={product.imageSlider.find((image) => image.id === selectedImage).alt}
                                />
                            </div>
                        )}
                        <div className="product-info">
                            <h1>{product.title}</h1>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            <p>
                                {product.rating} <StarBorderPurple500TwoToneIcon />
                            </p>
                            <button onClick={handleAddToCart} className='bag-btn'>ADD TO BAG</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;

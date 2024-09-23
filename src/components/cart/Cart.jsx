import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem('userId');

        if (!userId) {
            navigate('/login'); // Redirect to login if not logged in
            return;
        }

        const userCart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];
        setCartItems(userCart);
    }, [navigate]);

    const handleRemoveItem = (index) => {
        const userId = localStorage.getItem('userId');
        const updatedCart = cartItems.filter((_, i) => i !== index);
        localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart));
        setCartItems(updatedCart);
    };

    const handleAddItem = (item) => {
        const flipkartUrl = `https://www.flipkart.com/search?q=${encodeURIComponent(item.name)}`;
        window.location.href = flipkartUrl;
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0 auto',
            maxWidth: '1200px',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            transition: 'background-color 0.3s ease',
        }}>
            <h2 style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '28px',
                marginBottom: '20px',
                color: '#333',
                textDecoration: 'underline',
            }}>
                Shopping Cart
            </h2>
            {cartItems.length > 0 ? (
                <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    width: '100%',
                }}>
                    {cartItems.map((item, index) => (
                        <li key={index} style={{
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            padding: '15px',
                            marginBottom: '20px',
                            backgroundColor: '#f9f9f9',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        }}>
                            <img src={item.image} alt={item.name} style={{
                                width: '150px',
                                height: '150px',
                                borderRadius: '8px',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                marginRight: '20px',
                                transition: 'transform 0.3s ease',
                            }} />
                            <div style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}>
                                <h4 style={{
                                    margin: '10px 0',
                                    fontSize: '20px',
                                    color: '#444',
                                }}>Product Name: {item.name}</h4>
                                <p style={{
                                    margin: '10px 0',
                                    fontSize: '18px',
                                    color: '#666',
                                }}>Total Price: ${item.price}</p>
                                <div>
                                    <button onClick={() => handleRemoveItem(index)} style={{
                                        margin: '5px',
                                        padding: '10px 20px',
                                        border: 'none',
                                        borderRadius: '6px',
                                        backgroundColor: '#e74c3c',
                                        color: '#fff',
                                        fontSize: '16px',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s ease, transform 0.3s ease',
                                    }}>Remove</button>
                                    <button onClick={() => handleAddItem(item)} style={{
                                        margin: '5px',
                                        padding: '10px 20px',
                                        border: 'none',
                                        borderRadius: '6px',
                                        backgroundColor: '#2ecc71',
                                        color: '#fff',
                                        fontSize: '16px',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s ease, transform 0.3s ease',
                                    }}>Buy Now</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{
                    fontSize: '18px',
                    color: '#666',
                }}>No items in cart</p>
            )}
        </div>
    );
}

export default Cart;

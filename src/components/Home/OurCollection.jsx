import React from 'react';
import sunscrren5 from '../../assets/sunscreen/sunscreen5.webp';
import moisturizer from '../../assets/moisturizer/moisturizer2.1.jpg';
import lipstick from '../../assets/lipstick/lip3.1.jpg';
import serem from '../../assets/serem/serem3.2.jpg';



const OurCollection = () => {
  

  const items = [
    {
      id: 1,
      imageUrl: sunscrren5,
      name: 'BRIGHT IDEA',
      description: 'Clinical-grade formulas for visibly radiant results.',
    },
    {
      id: 2,
      imageUrl: lipstick,
      name: "lipstic's",
      description: 'HUDA GIRL BEAUTY Fabulous 5 in 1 Matte Finish Lipstick',
    },
    {
      id: 3,
      imageUrl: serem,
      name: 'MERRY, BLISSED OUT',
      description: 'Shop Our Holiday Collections',
    },
    {
      id: 4,
      imageUrl: moisturizer,
      name: 'DRENCH & QUENCH™',
      description: 'Supercharged moisturizers for happy, hydrated skin.',
    },
  ];



  return (
    <div className="collection-container">
      <h1  style = {{padding : "5%",textAlign : "center" , fontSize: "30px",fontWeight:'bold', fontFamily: "'Poppins', sans-serif"}}>SHOP OUR COLLECTIONS</h1>
      
      <div className="collections">
          {items.map((data) => (
            <div key={data.id} className="collection-card">
              <img src={data.imageUrl}alt={data.name} className="img-collection"
               onClick={() => window.location.href = '/all-products'} />
              <h1 className="collection-name">{data.name}</h1>
              <p className="collection-description">{data.description}</p>
            </div>
          ))}
          </div>
        </div>

        );
};

export default OurCollection;

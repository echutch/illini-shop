import { useState, useEffect } from 'react'

import './App.css'
import Header from './components/Header'
import Product from './components/Product';

function App() {
  const [data, setData] = useState([])

  useEffect(()=> {
    async function fetchData() {
      console.log(import.meta.env.VITE_API_URL)
      try {
        const response = await fetch (`${import.meta.env.VITE_API_URL}products`);
        if (!response.ok) {
          throw new Error('Network response failed');
        }
        const result = await response.json();
        console.log(result)
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const handleAddToCart = (name) => {
    console.log(`${name} added to cart`);
  };
  

  return (
    <>
    <Header />
    <main>
      <div className="product-list">
        {data.map((item, index) => (
          <Product
          key={index}
          name={item.name}
          price={item.price}
          stock={item.stock}
          description={item.description}
          onAddToCart={() => handleAddToCart(item.name)}
          />
        ))}
      </div>
    </main>
    </>
  );
}

export default App

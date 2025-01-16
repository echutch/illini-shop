import { useState, useEffect } from 'react'

import './App.css'
import Header from './components/Header'
import Product from './components/Product';
import LoginScreen from './components/Login';
import BodyContent from './components/BodyContent';
import RegisterScreen from './components/RegisterScreen';

function App() {
  const [data, setData] = useState([]);
  const [view, setView] = useState('main');

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
    <Header onLoginClick={() => setView('login')} />
    {view == 'main' ? (
      <BodyContent data={data} onAddToCart={handleAddToCart} />
    ) : view == 'login' ? (
      <LoginScreen onSignUpClick={() => setView('register')} />
    ) : (
      <RegisterScreen onBackToLoginClick={() => setView('login')} />

    )}
    
    </>
  );
}

export default App

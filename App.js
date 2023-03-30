// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/e/y/j/-original-imagg4zgqyzcynxn.jpeg?q=70',
      name: 'White Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Mumbai',
      price: 1999
    },
    {
      url: 'https://n4.sdlcdn.com/imgs/b/x/4/VR-Fashion-Digital-Black-Apple-SDL849617785-1-910cd.jpg',
      name: 'Black Watch',
      category: 'Watches',
      seller: 'AMZ Seller Mumbai',
      price: 1200
    },
    {
      url: 'https://m.economictimes.com/thumb/msid-92510378,width-1200,height-900,resizemode-4,imgsize-9834/macbook-pro.jpg',
      name: 'Apple Laptop 8GB RAM',
      category: 'Laptop',
      seller: 'AMZ Seller Mumbai',
      price: 120000
    },
    {
      url: 'https://c8.alamy.com/comp/H8EK8R/cctv-camera-digital-video-recorder-in-car-park-for-security-of-place-H8EK8R.jpg',
      name: 'Sequrity Camera',
      category: 'CCTV',
      seller: 'AMZ Seller Mumbai',
      price: 1499
    },
    {
      url: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-t-shirt/x/g/8/xl-skb-try-this-original-imag6hqngemxvfst-bb.jpeg?q=70',
      name: 'T-shirt white',
      category: 'Men & Women',
      seller: 'AMZ Seller Mumbai',
      price: 499
    },
    {
      url: 'https://images.bestsellerclothing.in/data/JJ/10-oct-2022/276260503_g1.jpg?width=1080&height=1090&mode=fill&fill=blur&format=auto',
      name: 'Denim Jaket',
      category: 'Men',
      seller: 'AMZ Seller Mumbai',
      price: 1249
    }
  ])
  return (
    <div>
      <Header></Header>
      <ProductList product={product} ></ProductList>
    </div>
  );
}

export default App;

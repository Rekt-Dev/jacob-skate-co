import React from 'react';
import { Link } from 'react-router-dom';
import './AssetGallery.css';

import bb1 from '../assets/bb/bb1.png';
import bb2 from '../assets/bb/bb2.png';
import bb3 from '../assets/bb/bb3.png';
import bb4 from '../assets/bb/bb4.png';
import bb5 from '../assets/bb/bb5.png';
import bb6 from '../assets/bb/bb6.png';
import bb7 from '../assets/bb/bb7.png';
import bb8 from '../assets/bb/bb8.png';
import bb9 from '../assets/bb/bb9.png';
import bb10 from '../assets/bb/bb10.png';
import bb11 from '../assets/bb/bb11.png';
import bb12 from '../assets/bb/bb12.png';
import bb13 from '../assets/bb/bb13.png';
import bb14 from '../assets/bb/bb14.png';
import bb15 from '../assets/bb/bb15.png';
import bb16 from '../assets/bb/bb16.png';
import bb17 from '../assets/bb/bb17.png';
import bb18 from '../assets/bb/bb18.png';
import bb19 from '../assets/bb/bb19.png';
import bb20 from '../assets/bb/bb20.png';

const products = [
  { img: bb1,  name: 'Deck 8.0"',         price: '₪249' },
  { img: bb2,  name: 'Deck 8.25"',        price: '₪249' },
  { img: bb3,  name: 'Complete Setup',    price: '₪649' },
  { img: bb4,  name: 'Trucks 149mm',      price: '₪189' },
  { img: bb5,  name: 'Wheels 52mm',       price: '₪129' },
  { img: bb6,  name: 'Bearings ABEC-7',   price: '₪69'  },
  { img: bb7,  name: 'Griptape',          price: '₪39'  },
  { img: bb8,  name: 'Skate Tee',         price: '₪149' },
  { img: bb9,  name: 'Logo Hoodie',       price: '₪299' },
  { img: bb10, name: 'Camp Cap',          price: '₪119' },
  { img: bb11, name: 'Cargo Pants',       price: '₪349' },
  { img: bb12, name: 'Skate Socks 3-pk',  price: '₪69'  },
  { img: bb13, name: 'Backpack',          price: '₪399' },
  { img: bb14, name: 'Tool Kit',          price: '₪89'  },
  { img: bb15, name: 'Skate Shoes',       price: '₪549' },
  { img: bb16, name: 'Knee Pads',         price: '₪149' },
  { img: bb17, name: 'Wax Block',         price: '₪29'  },
  { img: bb18, name: 'Sticker Pack',      price: '₪35'  },
  { img: bb19, name: 'Risers',            price: '₪29'  },
  { img: bb20, name: 'Hardware Set',      price: '₪25'  },
];

const AssetGallery: React.FC = () => (
  <div className="product-grid" style={{ paddingTop: '80px' }}>
    <div className="product-grid-header">
      <h2 className="product-grid-title">Collections</h2>
      <span className="product-count">{products.length} items</span>
    </div>
    <div className="product-grid-items">
      {products.map((p, i) => (
        <Link to={`/item-details/${i}`} key={i} className="product-card">
          <div className="product-card-img-wrap">
            <img src={p.img} alt={p.name} />
            <div className="product-card-overlay">
              <span>Quick View</span>
            </div>
          </div>
          <div className="product-card-info">
            <span className="product-card-name">{p.name}</span>
            <span className="product-card-price">{p.price}</span>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default AssetGallery;

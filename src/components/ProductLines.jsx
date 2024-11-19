import React from 'react';
import './ProductLines.css';
import c1 from '../assets/images/c1.jpg';
import c2 from '../assets/images/c2.jpg';
import c3 from '../assets/images/c3.jpg';
import c4 from '../assets/images/c4.jpg';
import c5 from '../assets/images/c5.jpg';
import c6 from '../assets/images/c6.jpg';
import c7 from '../assets/images/c7.jpg';
import c8 from '../assets/images/c8.jpg';

const products = [
  { img: c1, title: 'LÍNEA AUTOMOTOR' },
  { img: c2, title: 'LÍNEA CONSTRUCCIÓN' },
  { img: c3, title: 'LÍNEA ELÉCTRICA' },
  { img: c4, title: 'LÍNEA MEDICINAL' },
  { img: c5, title: 'LÍNEA SANITARIOS' },
  { img: c6, title: 'LÍNEA BLANCA' },
  { img: c7, title: 'LÍNEA TELECOMUNICACIONES' },
  { img: c8, title: 'ESPECIALES' },
];

const ProductLines = () => {
  return (
    <section className="product-lines">
      {products.map((product, index) => (
        <div className="product-item" key={index}>
          <img src={product.img} alt={product.title} />
          <h3>{product.title}</h3>
        </div>
      ))}
    </section>
  );
};

export default ProductLines;

import { Container, Grid } from '@mui/material';
import React from 'react';
import ProductCard from '../components/ProductCard';

const Products: React.FC = () => {
  const products = [
    {
      image: '',
      title: 'Product 1',
      description: 'This is the first product.',
    },
    {
      image: '',
      title: 'Product 2',
      description: 'This is the second product.',
    },
    {
      image: '',
      title: 'Product 3',
      description: 'This is the third product.',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ marginTop: '64px' }}>
      <h1>Products</h1>
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid key={index}>
            <ProductCard
              image={product.image}
              title={product.title}
              description={product.description}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;

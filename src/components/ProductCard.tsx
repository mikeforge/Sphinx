import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description }) => {
  return (
    <Box
      sx={{
        width: 300,
        margin: 2,
        '&:hover': {
          transform: 'scale(1.05)',
          transition: 'transform 0.3s ease-in-out',
        },
      }}
    >
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
          sx={{
            '&:hover': {
              opacity: 0.8,
            },
          }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductCard;
import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

// Dynamically import all images from the /assets/family_crests directory
const houses = Object.entries(
  import.meta.glob('../assets/family_crests/*.{png,jpg,jpeg,svg}', { eager: true })
).map(([path, module]) => ({
  image: (module as { default: string }).default, // Get the default export (image path)
  title: path.split('/').pop()?.split('.')[0] || 'Unknown', // Extract filename as title
}));

console.log(houses); // Log the houses array to see the imported images

const Houses: React.FC = () => {
  return (
    <Box sx={{ marginTop: '64px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Houses
      </Typography>
      <Grid container spacing={2}>
        {houses.map((house, index) => (
          <Grid key={index}>
            <Card>
              <CardMedia component="img" height="200" image={house.image} alt={house.title} />
              <CardContent>
                <Typography variant="h6" component="div">
                  {house.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Houses;

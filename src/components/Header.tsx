import React from 'react';
import { AppBar, Button, Toolbar, Box, Container, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useThemeContext } from '../context/ThemeContext';


const Header: React.FC = () => {
    const { darkMode, toggleDarkMode } = useThemeContext();
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
            <Button color="inherit" component={Link} to="/Lore">
              Lore
            </Button>
            <Button color="inherit" component={Link} to="/products">
              Products
            </Button>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton color="inherit" onClick={toggleDarkMode}>
              {darkMode ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;

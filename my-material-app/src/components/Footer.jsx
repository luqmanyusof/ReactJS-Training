import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        mt: 'auto',
        py: 3, 
        px: 2, 
        backgroundColor: (theme) => theme.palette.grey[200] 
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} User Manager. All rights reserved.
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          <Link href="/about" color="inherit" underline="hover">
            About
          </Link>
          {' | '}
          <Link href="/contact" color="inherit" underline="hover">
            Contact
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;

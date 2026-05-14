import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

function About() {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" paragraph>
          Welcome to our application. We are dedicated to providing the best service possible.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to deliver quality solutions that meet your needs.
        </Typography>
      </Paper>
    </Container>
  );
}

export default About;

import React from 'react';
import { Container, Typography, Grid, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to User Manager
      </Typography>
      <Typography variant="body1" paragraph>
        This is the home page of your application.
      </Typography>
      
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Project Setup</Typography>
            <Typography variant="body2" paragraph>
              Learn how to set up your React project from scratch
            </Typography>
            <Button 
              variant="contained" 
              component={Link} 
              to="/topics/project-setup"
            >
              View Topic
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>JSX and Variables</Typography>
            <Typography variant="body2" paragraph>
              Understand JSX syntax and how to use variables in React
            </Typography>
            <Button 
              variant="contained" 
              component={Link} 
              to="/topics/jsx-and-variables"
            >
              View Topic
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;

import React from 'react';
import { Container, Typography, Paper, TextField, Button, Box } from '@mui/material';

function Contact() {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" gutterBottom>
        Contact Us
      </Typography>
      <Paper sx={{ p: 3, mt: 3 }}>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Name" variant="outlined" fullWidth />
          <TextField label="Email" variant="outlined" type="email" fullWidth />
          <TextField label="Message" variant="outlined" multiline rows={4} fullWidth />
          <Button variant="contained" sx={{ mt: 2 }}>Send Message</Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Contact;

// src/components/DonationForm.js
import React from 'react';
import { Box, Container, Typography, TextField, Select, MenuItem, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function DonationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    amount: '',
    type: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your donation submission logic here
    alert(`Thank you for your ${formData.type} donation of $${formData.amount}!`);
    setFormData({ amount: '', type: '' });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box sx={{
        backgroundColor: 'white',
        padding: 3,
        borderRadius: 1,
        boxShadow: 1,
      }}>
        <Typography variant="h4" gutterBottom>
          Make a Donation
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            type="number"
            label="Amount ($)"
            margin="normal"
            value={formData.amount}
            onChange={(e) => setFormData({...formData, amount: e.target.value})}
            required
            min="1"
          />
          <Select
            fullWidth
            label="Type of Donation"
            margin="normal"
            value={formData.type}
            onChange={(e) => setFormData({...formData, type: e.target.value})}
            required
          >
            <MenuItem value="">Select Type</MenuItem>
            <MenuItem value="food">Food</MenuItem>
            <MenuItem value="clothing">Clothing</MenuItem>
            <MenuItem value="monetary">Monetary</MenuItem>
          </Select>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
          >
            Submit Donation
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default DonationForm;
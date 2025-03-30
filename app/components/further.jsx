import React, { useState } from 'react';
import { Box, Container, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button, Paper } from '@mui/material';

const Further = () => {
  const [formData, setFormData] = useState({
    institutionName: '',
    institutionType: '',
    headquarters: '',
    websiteUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission here
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2, backgroundColor: '#ffffff' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ 
          color: '#2c3e50',
          fontWeight: 600,
          mb: 4,
          textAlign: 'center'
        }}>
          Basic Institution Details
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <TextField
            required
            fullWidth
            label="Institution Name"
            name="institutionName"
            value={formData.institutionName}
            onChange={handleChange}
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#3498db',
                },
              },
            }}
          />

          <FormControl fullWidth required>
            <InputLabel>Institution Type</InputLabel>
            <Select
              name="institutionType"
              value={formData.institutionType}
              onChange={handleChange}
              label="Institution Type"
            >
              <MenuItem value="commercial">Commercial Bank</MenuItem>
              <MenuItem value="microfinance">Microfinance Institution</MenuItem>
              <MenuItem value="credit">Credit Union</MenuItem>
              <MenuItem value="lending">Lending Platform</MenuItem>
              <MenuItem value="other">Other (Specify)</MenuItem>
            </Select>
          </FormControl>

          <TextField
            required
            fullWidth
            label="Headquarters (Country & City)"
            name="headquarters"
            value={formData.headquarters}
            onChange={handleChange}
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#3498db',
                },
              },
            }}
          />

          <TextField
            required
            fullWidth
            label="Website URL"
            name="websiteUrl"
            value={formData.websiteUrl}
            onChange={handleChange}
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#3498db',
                },
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              mt: 2,
              py: 1.5,
              backgroundColor: '#3498db',
              '&:hover': {
                backgroundColor: '#2980b9',
              },
            }}
          >
            Continue
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Further;
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Header from './layouts/Header';
import Menu from './layouts/Menu';
import CountriesTable from './CountriesTable';

const Countries = ({ countries, current_user }) =>  {
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };

    // Filtrar países com base no termo de pesquisa
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header current_user= {current_user} />
        <Menu current_user= {current_user} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <TextField
                    fullWidth
                    label="Pesquisar países"
                    variant="outlined"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    sx={{ mb: 2 }}
                  />
                    <CountriesTable items={filteredCountries} />
                  </Paper>
                </Grid>
              </Grid>
            </Container>
        </Box>
      </Box>
    );
  }

  export default Countries;
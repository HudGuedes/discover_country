import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Header from './layouts/Header';
import Menu from './layouts/Menu';

const Country = ({ country, current_user }) =>  {
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
                  <Title>{country[0]['flag']} {country[0]['name']['common']}</Title>
                    <Divider/>
                    <Table size="small">
                        <TableBody>
                            <TableRow>
                                <TableCell>Capital: {country[0]['capital'] ? (country[0]['capital']) : 'Não informado'}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell> Ortografia alternativa: {country[0]['altSpellings'] ? Object.values(country[0]['altSpellings']).join(', ') : 'Não informado'}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Região: {country[0]['region']}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Idiomas: {country[0]['languages'] ? Object.values(country[0]['languages']).join(', ') : 'Não informado'}</TableCell>
                            </TableRow>
                            <TableRow>
                            {Object.entries(country[0]['translations']).map(([langCode, translations]) => (
                                <TableRow key={langCode}>
                                    <TableCell>Tradução: ({langCode}):</TableCell>
                                    <TableCell>Oficial: {translations.official}</TableCell>
                                    <TableCell>Comum: {translations.common}</TableCell>
                                </TableRow>
                            ))}
                            </TableRow>
                            <TableRow>
                                <TableCell>Mapa: {country[0]['maps'] ? Object.values(country[0]['maps']).join(' , ') : 'Não informado'}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>População: {country[0]['population']}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Fuso horário: {country[0]['timezones'] ? Object.values(country[0]['timezones']).join(' , ') : 'Não informado'}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Continentes: {country[0]['continents'] ? Object.values(country[0]['continents']).join(' , ') : 'Não informado'}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Bandeiras: {country[0]['flags'] ? Object.values(country[0]['flags']).join(' , ') : 'Não informado'}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Inicio da semana: {country[0]['startOfWeek']}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Capital informações: {country[0]['capitalInfo'] ? Object.values(country[0]['capitalInfo']).join(' , ') : 'Não informado'}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
        </Box>
      </Box>
    );
  }

  export default Country;
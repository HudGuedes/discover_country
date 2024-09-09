import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const CountriesTable = ({ items }) => {
  const sortedItems = items.sort((a, b) => a.name.common.localeCompare(b.name.common));

  const [page, setPage] = React.useState(0);
  const rowsPerPage = 25;

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedItems = items.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (endIndex < items.length) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <React.Fragment>
      <Title>Países</Title>
      <Divider />
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Bandeira</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedItems.map((row) => (
            <TableRow key={row.ccn3}>
              <TableCell>{row['name']['common']}</TableCell>
              <TableCell>{row['flag']}</TableCell>
              <TableCell>
                <Link href={`/countries/${row.ccn3}/`} variant="body2">
                  Detalhes
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button variant="contained" onClick={handlePrevPage} disabled={page === 0}>
          Página Anterior
        </Button>
        <Button
          variant="contained"
          onClick={handleNextPage}
          disabled={endIndex >= items.length}
        >
          Próxima Página
        </Button>
      </Box>
    </React.Fragment>
  );
}

export default CountriesTable;

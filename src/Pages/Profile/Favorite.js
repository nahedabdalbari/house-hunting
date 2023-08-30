import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function FavoriteTable({ favorites }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Favorites Table">
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {favorites.map((favorite) => (
            <TableRow key={favorite.id}>
              <TableCell>{favorite.type}</TableCell>
              <TableCell>{favorite.title}</TableCell>
              <TableCell>{favorite.price}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default FavoriteTable;

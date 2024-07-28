import  React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { students } from '../../App';
import { Card, Typography } from '@mui/material';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#3f51b5',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function BookDetail() {
    const {data} = useContext(students);

  return (
    <Box sx={{p:'15px'}}>



{!data.length ? 

<Card sx={{border:'1px solid grey', p:2}}>
  <Typography textAlign='center'>No Record Found!</Typography>
</Card>:

    <TableContainer component={Paper} >
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Studen Name</StyledTableCell>
            <StyledTableCell >Book Name</StyledTableCell>
            <StyledTableCell >Author Name</StyledTableCell>
            <StyledTableCell >Course Name</StyledTableCell>
            <StyledTableCell >Issue Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row,i) => (
            <StyledTableRow key={i}>
              <StyledTableCell >{row?.data?.studentName}</StyledTableCell>
              <StyledTableCell >{row?.data?.bookName}</StyledTableCell>
              <StyledTableCell >{row?.data?.authorName}</StyledTableCell>
              <StyledTableCell >{row?.data?.courseName}</StyledTableCell>
              <StyledTableCell >{row?.data?.issueDate}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>}
    </Box>
  );
}

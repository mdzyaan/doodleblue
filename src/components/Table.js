import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';

const TableCellContainer = styled.span`
    display: flex;
    flex-direction: row;
`;

const ContentWrapper = styled.div`
    flex-direction: column;
    margin-left: 10px;
`;

const Name = styled.p`
    font-weight: bold;
    margin: 0;
`;

const Email = styled.span`
    color: #00000082;
    font-size: 12px;
`;

export default function SimpleTable({ data, onSelect }) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Company</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((contact, index) => (
                        <TableRow key={index} >
                            <TableCell component="th" scope="row">
                                <TableCellContainer onClick={(e) => onSelect(contact)}>
                                    <Avatar>MH</Avatar>
                                    <ContentWrapper>
                                        <Name>{contact.fullName}</Name>
                                        <Email>{contact.email}</Email>
                                    </ContentWrapper>
                                </TableCellContainer>
                            </TableCell>
                            <TableCell align="right">{contact.company}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
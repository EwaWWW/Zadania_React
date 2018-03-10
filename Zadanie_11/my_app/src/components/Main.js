import React from 'react';
import { Link } from 'react-router-dom';
import players from "../data/Players.js";

import {
    Table,
    TableHeader,
    TableBody,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

export default () => {
    const state ={
        showCheckboxes: false,
        showRowHover: true,
    };

    return <React.Fragment>
    <Table>
    <TableHeader displaySelectAll={state.showCheckboxes}>
<TableRow>
    <TableHeaderColumn>Nazwa</TableHeaderColumn>
    <TableHeaderColumn>Numer koszulki</TableHeaderColumn>
    </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={state.showCheckboxes}>
    {players.map(player =>
    <TableRow key={player.id}>
    <TableRowColumn><Link to={`/player/${player.id}`}>{player.name}</Link></TableRowColumn>
    <TableRowColumn>{player.number}</TableRowColumn>
    </TableRow>)}
    </TableBody>
    </Table>
    </React.Fragment>
    };
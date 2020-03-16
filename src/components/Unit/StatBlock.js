import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

export default function StatBlock({ stats }) {
  let shooting = stats.shoot ? `${stats.shoot}+` : '-';
  let shootingValue = stats.shoot ? `${stats.shootValue}+/${stats.shootRange}"` : '-';

  return (
    <TableContainer>
      <Table size="small">
        <TableBody>
          <TableRow>
            <TableCell>Attack</TableCell>
            <TableCell>{stats.attack}+</TableCell>
            <TableCell>Attack Value</TableCell>
            <TableCell>{stats.attackValue}+</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Move</TableCell>
            <TableCell>{stats.move}+</TableCell>
            <TableCell>Defence Value</TableCell>
            <TableCell>{stats.defenceValue}+</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Shoot</TableCell>
            <TableCell>{shooting}</TableCell>
            <TableCell>Shoot Value</TableCell>
            <TableCell>{shootingValue}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Courage</TableCell>
            <TableCell>{stats.courage}+</TableCell>
            <TableCell>Movement</TableCell>
            <TableCell>{stats.movement}"</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Armour</TableCell>
            <TableCell>{stats.armour}</TableCell>
            <TableCell>Strength Points</TableCell>
            <TableCell>{stats.strengthPoints}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { Hidden } from '@material-ui/core';

export default function StatBlock({ stats }) {
  let shooting = stats.shoot ? `${stats.shoot}+` : '-';
  let shootingValue = stats.shoot ? `${stats.shootValue}+/${stats.shootRange}"` : '-';

  return (
    <TableContainer>
      <Table size="small">
        <Hidden xsDown>
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
        </Hidden>
        <Hidden smUp>
          <TableBody>
            <TableRow>
              <TableCell>A</TableCell>
              <TableCell>{stats.attack}+</TableCell>
              <TableCell>AV</TableCell>
              <TableCell>{stats.attackValue}+</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>M</TableCell>
              <TableCell>{stats.move}+</TableCell>
              <TableCell>DV</TableCell>
              <TableCell>{stats.defenceValue}+</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>S</TableCell>
              <TableCell>{shooting}</TableCell>
              <TableCell>SV</TableCell>
              <TableCell>{shootingValue}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>C</TableCell>
              <TableCell>{stats.courage}+</TableCell>
              <TableCell>MR</TableCell>
              <TableCell>{stats.movement}"</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ar</TableCell>
              <TableCell>{stats.armour}</TableCell>
              <TableCell>SP</TableCell>
              <TableCell>{stats.strengthPoints}</TableCell>
            </TableRow>
          </TableBody>
        </Hidden>
      </Table>
    </TableContainer>
  );
}

import { Box, Button, ButtonGroup, DialogTitle } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import ShareIcon from '@material-ui/icons/Share';
import React, { useCallback, useState } from 'react';
import ExportCustomData from './ExportCustomData';
import FantasticalRulesPanel from './FantasticalRulesPanel';
import ImportCustomData from './ImportCustomData';
import RulesPanel from './RulesPanel';
import SpellsPanel from './SpellsPanel';
import UnitsPanel from './UnitsPanel';

const CustomizeMenuContent = () => {
  const [expanded, setExpanded] = useState<string>('');
  const [openImExport, setOpenImExport] = useState<string>('');

  const handleChange = useCallback(
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : '');
    },
    []
  );

  const handleImExportClose = useCallback(() => setOpenImExport(''), []);

  return (
    <>
      <DialogTitle>Customize</DialogTitle>
      <UnitsPanel expanded={expanded} handleChange={handleChange} />
      <FantasticalRulesPanel expanded={expanded} handleChange={handleChange} />
      <RulesPanel expanded={expanded} handleChange={handleChange} />
      <SpellsPanel expanded={expanded} handleChange={handleChange} />
      <Box m={2} mx="auto">
        <ButtonGroup color="primary" variant="outlined">
          <Button
            aria-label="Import custom data"
            startIcon={<GetAppIcon />}
            onClick={() => setOpenImExport('import')}
          >
            Import
          </Button>
          <Button
            aria-label="Export custom data"
            startIcon={<ShareIcon />}
            onClick={() => setOpenImExport('export')}
          >
            Export
          </Button>
        </ButtonGroup>
      </Box>
      <ImportCustomData
        open={openImExport === 'import'}
        handleClose={handleImExportClose}
      />
      <ExportCustomData
        open={openImExport === 'export'}
        handleClose={handleImExportClose}
      />
    </>
  );
};

export default React.memo(CustomizeMenuContent);

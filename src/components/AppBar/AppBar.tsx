import EditIcon from '@mui/icons-material/Edit';
import ReplayIcon from '@mui/icons-material/Replay';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  AppBar as AppBarMaterial,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { newRoster } from '../../store/rosterSlice';
import InlineRules from '../MenuActions/InlineRules';
import LoadList from '../MenuActions/LoadList';
import SaveList from '../MenuActions/SaveList';
import SideMenu from '../SideMenu';
import ToggleViewMode from './ToggleViewMode';
import TotalPoints from './TotalPoints';

const AppBar = () => {
  const dispatch = useAppDispatch();
  const edition = useAppSelector((state) => state.ui.edition);

  return (
    <Box display="flex">
      <AppBarMaterial position="fixed">
        <Toolbar>
          <Box display="flex" alignItems="center">
            <SideMenu />
            <Typography
              variant="h3"
              sx={{ display: { xs: 'none', md: 'block' }, ml: 2 }}
            >
              Dragon Rampant Army Builder
            </Typography>
            <Typography
              variant="h3"
              sx={{ display: { xs: 'none', sm: 'block', md: 'none' }, ml: 2 }}
            >
              DRAB
            </Typography>
            <Typography variant="subtitle2" sx={{ paddingTop: '2px', mx: 1 }}>
              {edition === 'second' ? '2nd' : '1st'}
            </Typography>
            <IconButton
              color="inherit"
              aria-label="reload"
              onClick={() => dispatch(newRoster())}
              size="large"
            >
              <ReplayIcon />
            </IconButton>
            <SaveList />
            <LoadList />
          </Box>
          <Box flexGrow={1}></Box>
          <Box display="flex" alignItems="center">
            <ToggleViewMode option="viewMode" Icon={VisibilityIcon} title="View mode" />
            <ToggleViewMode option="editMode" Icon={EditIcon} title="Edit mode" />
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <InlineRules />
            </Box>
            <TotalPoints />
          </Box>
        </Toolbar>
      </AppBarMaterial>
      <Toolbar />
    </Box>
  );
};

export default AppBar;

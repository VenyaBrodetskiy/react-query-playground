import { Outlet, Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import { PATHS } from '../paths';

const drawerWidth = 240;

export default function Layout() {
  const location = useLocation();

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: PATHS.HOME },
    { text: 'Hooks', icon: <CodeIcon />, path: PATHS.HOOKS },
    { text: 'React Query', icon: <StorageIcon />, path: PATHS.REACT_QUERY },
    { text: 'RQ Suspense', icon: <StorageIcon />, path: PATHS.REACT_QUERY_SUSPENSE },
    { text: 'React 19 Actions', icon: <NewReleasesIcon />, path: PATHS.REACT_19 },
    { text: 'React 19 Fetch', icon: <CloudSyncIcon />, path: PATHS.REACT_19_FETCH },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            My App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton 
                component={RouterLink} 
                to={item.path}
                selected={location.pathname === item.path}
              >
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

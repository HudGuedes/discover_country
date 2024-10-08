import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import FlagIcon from '@mui/icons-material/Flag';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const Menu = ({ current_user }) =>  {
	const [open, setOpen] = React.useState(true);
	const toggleDrawer = () => {
		setOpen(!open);
	};
	const menuItems = (
		<List>
		  <ListItem key='Países' disablePadding>
		    <ListItemButton href="/countries">
		      <ListItemIcon>
		        <FlagIcon/>
		      </ListItemIcon>
		      <ListItemText primary='Países' />
		    </ListItemButton>
		  </ListItem> 
		</List>
	);

	return(
		<React.Fragment>
			<Drawer variant="permanent" open={open}>
			  <Toolbar
			    sx={{
			      display: 'flex',
			      alignItems: 'center',
			      justifyContent: 'flex-end',
			      px: [1],
			    }}
			  >
			  </Toolbar>
			  <Divider />
			  <List component="nav">
			    {menuItems}
			  </List>
			</Drawer>
		</React.Fragment>
	)
}

export default Menu;
import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography';
import AccountMenu from './AccountMenu';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header = ({ current_user }) =>  {
	const [open, setOpen] = React.useState(true);
	const toggleDrawer = () => {
		setOpen(!open);
	};
	return(
	 	<React.Fragment>
			<AppBar position="absolute" open={open}>
				<Toolbar
				sx={{
				  pr: '24px', // keep right padding when drawer closed
				}}
				>
					<IconButton
					  edge="start"
					  color="inherit"
					  aria-label="open drawer"
					  onClick={toggleDrawer}
					  sx={{
					    marginRight: '36px',
					    ...(open && { display: 'none' }),
					  }}
					>
					  <MenuIcon />
					</IconButton>
					<Typography
					  component="h1"
					  variant="h6"
					  color="inherit"
					  noWrap
					  sx={{ flexGrow: 1 }}
					>
					  Informação de países
					</Typography>
					<AccountMenu current_user={current_user} />
				</Toolbar>
			</AppBar>
		</React.Fragment>
	)
}

export default Header;
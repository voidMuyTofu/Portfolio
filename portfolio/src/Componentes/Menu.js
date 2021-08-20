import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';

import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Button } from '@material-ui/core'

import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import BarChartIcon from '@material-ui/icons/BarChart';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    
    boton1: {
        marginTop: '18%',
        marginLeft: '8%'
    },

    botones: {
        marginTop: '18%',
        marginLeft: '8%'
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },

    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
}));

export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Button variant="contained" style={{ marginLeft: '100px', marginTop: '715px' }} onClick={handleDrawerOpen}>Hola</Button>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />

                <Divider />
                <List>

                    <ListItem button key={1} className={classes.boton1}>
                        <ListItemIcon><PersonIcon /></ListItemIcon>
                        <ListItemText primary={"About me"} />
                    </ListItem>
                    <ListItem button key={2} className={classes.botones}>
                        <ListItemIcon><WorkIcon /></ListItemIcon>
                        <ListItemText primary={"Projects"} />
                    </ListItem>
                    <ListItem button key={3} className={classes.botones}>
                        <ListItemIcon><BarChartIcon /></ListItemIcon>
                        <ListItemText primary={"Skills"} />
                    </ListItem>
                    <ListItem button key={4} className={classes.botones}>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary={"Contact me"} />
                    </ListItem>

                </List>
            </Drawer>
        </div>
    );
}

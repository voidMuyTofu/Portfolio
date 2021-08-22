import React, { Children } from 'react';
import clsx from 'clsx';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    Drawer, ListItem, ListItemIcon, ListItemText, List,
    CssBaseline, Divider, IconButton, Button, ClickAwayListener
} from '@material-ui/core';


import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import BarChartIcon from '@material-ui/icons/BarChart';

import Scroller from './Scroller';

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
        justifyContent: 'center',
        overflow: 'hidden'
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
        justifyContent: 'center'
    },

    toolbar: {
        position: 'relative',
        top: '-20%'
    },
}));

export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpenandClose = () => {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Scroller/>
            <ClickAwayListener onClickAway={handleDrawerClose}>
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

                    <IconButton className={classes.toolbar} onClick={handleDrawerOpenandClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>


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
            </ClickAwayListener>
        </div>
    );
}

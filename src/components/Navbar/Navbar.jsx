import React from 'react';
import {AppBar, ToolBar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import classes from '*.module.css';

const Navbar = () => {
    return (
        <>
            
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={} alt="Frankly Juice" height="25px" className={classes.image} />
                        Frankly Juice
                    </Typography>
                </Toolbar>

            </AppBar>

        </>
    )
}

export default Navbar;

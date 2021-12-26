import React from 'react';
import {Box, Button, Grid, IconButton, Link, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    divider: {
        height: 100,
        backgroundColor: "#5da8ef",
        width: 1,
        margin: "25px auto",
        display: "block",
    },
});

function VerticalDivider() {
    const classes = useStyles();

    return (
        <div className={classes.divider}>

        </div>
    );
}

export default VerticalDivider;

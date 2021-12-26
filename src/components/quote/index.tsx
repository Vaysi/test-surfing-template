import React from 'react';
import {Box, Button, Grid, IconButton, Link, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {makeStyles} from "@mui/styles";
import VerticalDivider from "../inline-components/vertical-divider";

const useStyles = makeStyles({
    text: {
        color: "#333",
        fontSize: 26,
        fontFamily: "Playfair Display,arial",
        width: "50%",
        margin: "auto"
    },
    author: {
        color: "#333",
        fontSize: 12,
        fontFamily: "League Spartan",
        fontWeight: "bold",
        marginTop: 20
    },
});

function Quote() {
    const classes = useStyles();

    return (
        <div className="quote">
            <Typography variant="body1" align={"center"} className={classes.text} gutterBottom>
                Surfing is the most blissful experience you can have
                on this planet, a taste of heaven.
            </Typography>
            <Typography variant="body2" align={"center"} className={classes.author} gutterBottom>
                JOHN MCCARTHY
            </Typography>
            <VerticalDivider />
        </div>
    );
}

export default Quote;

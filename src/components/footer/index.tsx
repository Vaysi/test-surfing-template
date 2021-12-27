import React from 'react';
import {Box, Button, Grid, IconButton, Link, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {makeStyles} from "@mui/styles";
import VerticalDivider from "../inline-components/vertical-divider";

const useStyles = makeStyles({
    root: {
        textAlign: "center",
        margin: "50px auto"
    },
    links: {
        marginTop: 35
    },
    link: {
        marginRight: 40,
        fontFamily: "League Spartan,arial",
        color: "#0b0c11",
        fontSize: 12
    }
});

function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img src="/assets/images/logo.png" alt="Logo" title={"Afrozweb Test Project"}/>
            <nav className={classes.links}>
                <Link className={classes.link} href="#" underline="none">
                    STORIES
                </Link>
                <Link className={classes.link} href="#" underline="none">
                    EVENTS
                </Link>
                <Link className={classes.link} href="#" underline="none">
                    PLACES
                </Link>
                <Link className={classes.link} href="#" underline="none">
                    BOARDS
                </Link>
            </nav>
            <nav className={classes.links}>
                <Link className={classes.link} href="#" underline="none">
                    <img src="/assets/images/twitter.png" alt="twitter" />
                </Link>
                <Link className={classes.link} href="#" underline="none">
                    <img src="/assets/images/tumblr.png" alt="tumbler" />
                </Link>
                <Link className={classes.link} href="#" underline="none">
                    <img src="/assets/images/vimeo.png" alt="vimeo" />
                </Link>
            </nav>
        </div>
    );
}

export default Footer;

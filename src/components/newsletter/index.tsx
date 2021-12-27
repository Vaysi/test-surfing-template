import React from 'react';
import {
    Box,
    Button, Divider,
    Grid,
    IconButton,
    InputBase,
    Link,
    Menu,
    MenuItem,
    Paper,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {makeStyles} from "@mui/styles";
import VerticalDivider from "../inline-components/vertical-divider";
import {ChevronRight, Search} from "@mui/icons-material";

const useStyles = makeStyles({
    title: {
        color: "#333",
        fontSize: 56,
        fontFamily: "Playfair Display,arial",
        fontWeight: "bold"
    },
    subtitle: {
        color: "#616161",
        fontSize: 18,
        fontFamily: "Poppins",
        fontWeight: "lighter",
        width: "50%",
        margin: "auto"
    },
    form: {
        display: 'flex',
        alignItems: 'center',
        width: 400,
        margin:"25px auto",
        backgroundColor: "#f5f5f5",
        boxShadow: "inset 0px 1px 2px 0px rgba(0, 0, 0, 0.03)"
    },
    button: {
        backgroundColor: "#5da8ef",
        color: "#fff",
        borderRadius: 0
    }
});

function Newsletter() {
    const classes = useStyles();

    return (
        <div className="newsletter">
            <Typography variant={"subtitle1"} align={"center"} className={classes.title}>
                Join The Club
            </Typography>
            <Typography variant="body2" align={"center"} className={classes.subtitle} gutterBottom>
                By better understanding the various aspects of surfing, you will improve faster
                and have more fun in the water.
            </Typography>
            <Paper className={classes.form}>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Your Email"
                />
                <IconButton className={classes.button} sx={{ p: '10px' }}>
                    <ChevronRight />
                </IconButton>
            </Paper>
        </div>
    );
}

export default Newsletter;

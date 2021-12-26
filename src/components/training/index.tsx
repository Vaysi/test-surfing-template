import React from 'react';
import {makeStyles} from "@mui/styles";
import {Grid, Typography} from "@mui/material";
import UnderlinedText from "../inline-components/underlined-text";

const useStyles = makeStyles({
    title: {
        fontFamily: "Playfair Display,arial",
        fontWeight: "bold",
        color: "#333",
        fontSize: 52,
        marginTop: 90
    },
    horizontalDivider: {
        marginTop: 10,
        display:"block",
        width: "5%",
        height: 2,
        backgroundColor: "#5da8ef"
    },
    subtitle: {
        fontFamily: "Poppins,arial",
        fontWeight: "lighter",
        color: "#616161",
        fontSize: 17,
        width: "90%",
        marginTop: 30,
        marginBottom: 50
    }
});

function Training() {
    const classes = useStyles();

    return (
        <div className="training">
            <Grid container>
                <Grid item xs={5}>
                    <Typography variant="body2" className={classes.title}>
                        Surf Training
                    </Typography>
                    <div className={classes.horizontalDivider}></div>
                    <Typography variant="body2" className={classes.subtitle}>
                        By better understanding the various aspects of surfing, By better understanding the various aspects of surfing, you will improve faster and have more fun in the water.
                    </Typography>
                    <UnderlinedText text={"Read More"} />
                </Grid>
                <Grid item xs={7}>
                    <img src={"/assets/images/training.jpg"} />
                </Grid>
            </Grid>
        </div>
    );
}

export default Training;

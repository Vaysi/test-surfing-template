import React from 'react';
import {makeStyles} from "@mui/styles";
import {Grid, Typography} from "@mui/material";
import UnderlinedText from "../inline-components/underlined-text";
import VerticalDivider from "../inline-components/vertical-divider";

const useStyles = makeStyles({
    title: {
        fontFamily: "Playfair Display,arial",
        fontWeight: "bold",
        color: "#333",
        fontSize: 52,
        marginTop: 50
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

function PointBreak() {
    const classes = useStyles();

    return (
        <div className="training">
            <Grid container marginTop={20} justifyContent={"center"}>
                <Grid item xs={5}>
                    <img src={"/assets/images/point-break.jpg"} />
                </Grid>
                <Grid item xs={5} style={{paddingLeft: 70}}>
                    <Typography variant="body2" className={classes.title}>
                        Point Break
                    </Typography>
                    <div className={classes.horizontalDivider}></div>
                    <Typography variant="body2" className={classes.subtitle}>
                        By better understanding the various aspects of By better understanding the various aspects of surfing, By better understanding the various aspects of surfing, you will improve faster and have more fun in the water.
                    </Typography>
                    <UnderlinedText text={"Read More"} />
                </Grid>
            </Grid>
            <VerticalDivider style={{marginTop: 60,marginBottom: 60}} />
        </div>
    );
}

export default PointBreak;

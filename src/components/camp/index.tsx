import React from 'react';
import {makeStyles} from "@mui/styles";
import {Grid, Typography} from "@mui/material";
import UnderlinedText from "../inline-components/underlined-text";
import VerticalDivider from "../inline-components/vertical-divider";

const useStyles = makeStyles({
    subtitle: {
        fontFamily: "League Spartan,arial",
        fontWeight: "bold",
        color: "#bcbcbd",
        fontSize: 12,
        marginTop: 50
    },
    title: {
        fontFamily: "Playfair Display,arial",
        fontWeight: "bold",
        color: "#333333",
        fontSize: 35,
        width: "90%",
        marginTop: 30,
        marginBottom: 50,
        paddingLeft: 50
    }
});

function Camp() {
    const classes = useStyles();

    return (
        <div className="training">
            <Grid container marginTop={20} justifyContent={"center"}>
                <Grid item xs={7}>
                    <img src={"/assets/images/camp.jpg"}/>
                </Grid>
                <Grid item xs={5} style={{paddingLeft: 20}}>
                    <Typography variant="body2" className={classes.subtitle}>
                        OUR CAMP
                    </Typography>
                    <Typography variant="body2" className={classes.title}>
                        CA 91932, USA
                        Imperial Beach
                        560 Silver Strand Blvd
                    </Typography>
                    <UnderlinedText text={"Get in Touch"} color={"#5da8ef"}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default Camp;

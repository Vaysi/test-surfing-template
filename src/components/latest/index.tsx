import React, {useRef, useState} from 'react';
import {
    Box,
    Button, Card,
    CardActionArea,
    CardContent, CardMedia,
    Grid,
    IconButton,
    Link,
    Menu,
    MenuItem,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {makeStyles} from "@mui/styles";
import VerticalDivider from "../inline-components/vertical-divider";
import {PlayCircle} from "@mui/icons-material";
import UnderlinedText from "../inline-components/underlined-text";

const useStyles = makeStyles({
    card: {
        boxShadow: "none"
    },
    cardCaption: {
        color: "#616161",
        fontSize: 16,
        fontFamily: "Poppins",
        fontWeight: "lighter",
        marginBottom: 20,
    },
    cardCaptionWrapper: {
        width: "70%",
        margin: "auto"
    },
    video: {
        width: "105%",
        height: "100%",
        position: "relative",
        left: "-5%",
        top: "2%"
    },
    play: {
        boxShadow: "-2.121px -2.121px 35px 0px rgba(0, 0, 0, 0.13)",
        color: "rgb(93, 168, 239)",
        position: "absolute",
        left: 0,
        right: 0,
        top:0,
        bottom: 0,
        width: "fit-content",
        height: "fit-content",
        margin: "auto",
        borderRadius:"50%",
        backgroundColor: "#fff",
        padding: 0
    }
});

function Latest() {
    const classes = useStyles();
    const [playVisibility,setPlayVisibility] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const playVideo = () => {
        if(videoRef && videoRef.current){
            videoRef.current.play();
            videoRef.current.controls = true;
            setPlayVisibility(false);
        }
    };
    return (
        <div className="latest">
            <Grid container>
                <Grid item xs={6}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image="/assets/images/latest.jpg"
                            />
                            <CardContent className={classes.cardCaptionWrapper}>
                                <Typography variant="body2" className={classes.cardCaption}>
                                    By better understanding the various aspects of surfing, you will improve faster and have more fun in the water.
                                </Typography>
                                <UnderlinedText text={"READ MORE"} />
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6} style={{position:"relative"}}>
                    <video ref={videoRef} src="https://filesamples.com/samples/video/mp4/sample_960x400_ocean_with_audio.mp4" className={classes.video} poster={"/assets/images/video-preload.jpg"}>
                        Your Browser Doesn't Support Videos, Sorry For That
                    </video>
                    {playVisibility && <IconButton onClick={playVideo} className={classes.play} component="span">
                        <PlayCircle style={{fontSize: 50,padding:0}} />
                    </IconButton> }
                </Grid>
            </Grid>
        </div>
    );
}

export default Latest;

import React from 'react';
import {Box, Button, Grid, IconButton, Link, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {makeStyles} from "@mui/styles";
import VerticalDivider from "../inline-components/vertical-divider";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import SlickSlider from "react-slick";


function SampleNextArrow(props: any) {
    const {onClick} = props;
    return (
        <IconButton onClick={onClick} style={{position: "absolute", bottom: 0,top:0, right: 0,zIndex:50,height:"fit-content",margin:"auto"}} component="span">
            <ChevronRight style={{color:"#636363"}}/>
        </IconButton>
    );
}

function SamplePrevArrow(props: any) {
    const {onClick} = props;
    return (
        <IconButton onClick={onClick} style={{position: "absolute", bottom: 0,top:0, left: 0,zIndex: 50,height:"fit-content",margin:"auto"}} component="span">
            <ChevronLeft style={{color:"#636363"}}/>
        </IconButton>
    );
}

const useStyles = makeStyles({
    products: {
      marginTop: 120
    },
    title: {
        color: "#333",
        fontSize: 50,
        fontFamily: "Playfair Display,arial",
        fontWeight: "bold"
    },
    subtitle: {
        fontFamily: "League Spartan,arial",
        color: "#5da8ef",
        fontWeight: "bold",
        fontSize: 12,
        letterSpacing: 8
    },
    slideItem:{
        position: "relative"
    },
    content: {
        position: "absolute",
        top: 0,
        bottom:0,
        right: "8%",
        margin: "auto",
        height: "fit-content"
    },
    slideTitle: {
        color: "#333",
        fontSize: 21,
        fontFamily: "Playfair Display,arial",
        marginBottom: 20
    },
    slideSubtitle: {
        color: "#7a7a7a",
        fontSize: 16,
        fontFamily: "Poppins,arial",
        letterSpacing: 3
    },
    price: {
        textAlign: "center",
        color: "#ce60a8",
        fontFamily: "Poppins,arial",
        fontSize: 26
    },
    buy: {
        color: "#333",
        fontFamily: "League Spartan,arial",
        fontSize: 12,
        display: "block",
        marginTop: -7
    }
});

function Products() {
    const classes = useStyles();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        prevArrow: <SamplePrevArrow/>,
        nextArrow: <SampleNextArrow/>
    };

    return (
        <div className={classes.products}>
            <Typography variant="body1" align={"center"} className={classes.subtitle} gutterBottom>
                SHOP
            </Typography>
            <Typography variant="body2" align={"center"} className={classes.title} gutterBottom>
                Surfboard
            </Typography>
            <SlickSlider {...settings}>
                <div className={classes.slideItem}>
                    <img src="/assets/images/slider/board1.png"/>
                    <div className={classes.content}>
                        <Typography variant="subtitle1" className={classes.slideSubtitle}>
                            FUNBOARDS
                        </Typography>
                        <Typography variant="subtitle1" className={classes.slideTitle}>
                            Chilli Rare Bird
                        </Typography>
                        <Typography variant={"subtitle1"} className={classes.price}>
                            $890
                            <Link underline={"none"} className={classes.buy} href={"#"}>
                                BUY
                            </Link>
                        </Typography>
                    </div>
                </div>
                <div className={classes.slideItem}>
                    <img src="/assets/images/slider/board3.png"/>
                    <div className={classes.content}>
                        <Typography variant="subtitle1" className={classes.slideSubtitle}>
                            FUNBOARDS
                        </Typography>
                        <Typography variant="subtitle1" className={classes.slideTitle}>
                            Agency GROM
                        </Typography>
                        <Typography variant={"subtitle1"} className={classes.price}>
                            $950
                            <Link underline={"none"} className={classes.buy} href={"#"}>
                                BUY
                            </Link>
                        </Typography>
                    </div>
                </div>
                <div className={classes.slideItem}>
                    <img src="/assets/images/slider/board2.png"/>
                    <div className={classes.content}>
                        <Typography variant="subtitle1" className={classes.slideSubtitle}>
                            SUPERBOARDS
                        </Typography>
                        <Typography variant="subtitle1" className={classes.slideTitle}>
                            EMERY NEM XF
                        </Typography>
                        <Typography variant={"subtitle1"} className={classes.price}>
                            $740
                            <Link underline={"none"} className={classes.buy} href={"#"}>
                                BUY
                            </Link>
                        </Typography>
                    </div>
                </div>
                <div className={classes.slideItem}>
                    <img src="/assets/images/slider/board1.png"/>
                    <div className={classes.content}>
                        <Typography variant="subtitle1" className={classes.slideSubtitle}>
                            FUNBOARDS
                        </Typography>
                        <Typography variant="subtitle1" className={classes.slideTitle}>
                            Chilli Rare Bird
                        </Typography>
                        <Typography variant={"subtitle1"} className={classes.price}>
                            $890
                            <Link underline={"none"} className={classes.buy} href={"#"}>
                                BUY
                            </Link>
                        </Typography>
                    </div>
                </div>
                <div className={classes.slideItem}>
                    <img src="/assets/images/slider/board3.png"/>
                    <div className={classes.content}>
                        <Typography variant="subtitle1" className={classes.slideSubtitle}>
                            FUNBOARDS
                        </Typography>
                        <Typography variant="subtitle1" className={classes.slideTitle}>
                            Agency GROM
                        </Typography>
                        <Typography variant={"subtitle1"} className={classes.price}>
                            $950
                            <Link underline={"none"} className={classes.buy} href={"#"}>
                                BUY
                            </Link>
                        </Typography>
                    </div>
                </div>
            </SlickSlider>
        </div>
    );
}

export default Products;

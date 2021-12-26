import React, {useState} from 'react';
import {makeStyles} from "@mui/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

import SlickSlider from "react-slick";
import {IconButton} from "@mui/material";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";


function SampleNextArrow(props: any) {
    const {onClick} = props;
    return (
        <IconButton onClick={onClick} style={{position: "absolute", bottom: "10%", left: "8%",zIndex:50}} component="span">
            <ChevronRight/>
        </IconButton>
    );
}

function SamplePrevArrow(props: any) {
    const {onClick} = props;
    return (
        <IconButton onClick={onClick} style={{position: "absolute", bottom: "10%",zIndex: 50}} component="span">
            <ChevronLeft/>
        </IconButton>
    );
}

const useStyles = makeStyles({
    logo: {
        display: "flex",
        alignItems: "center"
    },
    sliderItem: {
        height: 550,
        position: "relative"
    },
    sliderImage: {
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        width: "80%",
        zIndex: 5,
    },
    sliderCaption: {
        zIndex: 10,
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        margin: "auto",
        height: "fit-content"
    },
    span: {
        color: "#5da8ef",
        fontFamily: "League Spartan,arial",
        fontSize: 12,
        letterSpacing: 10
    },
    headline: {
        color: "#0b0c11",
        fontFamily: "Playfair Display,arial",
        fontSize: 85,
        fontWeight: "bold",
        marginTop: 15,
        marginBottom: 15
    },
    caption: {
        color: "#8f8f8f",
        fontFamily: "Poppins,arial",
        fontSize: 18,
        fontWeight: "lighter"
    },
    pageCounter: {
        fontFamily: "League Spartan,arial",
        fontSize: 13,
        position: "relative",
        top: -83,
        left: 50
    },
    currentPage: {
        color: "#5da8ef",
    },
    totalPage: {
        color: "#0b0c11",
    },
    seperator: {
        color: "#f0f0f0",
        margin: "0 5px"
    }
});

function Slider() {
    const classes = useStyles();
    const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        afterChange(currentSlide: number) {
            setCurrentSlide(currentSlide);
        },
        autoplay: true,
        prevArrow: <SamplePrevArrow/>,
        nextArrow: <SampleNextArrow/>
    };

    return (
        <div className="Slider">
            <SlickSlider {...settings}>
                <div className={classes.sliderItem}>
                    <img src="/assets/images/slider/first.png" className={classes.sliderImage}/>
                    <div className={classes.sliderCaption}>
                        <span className={classes.span}>YOUR</span>
                        <h1 className={classes.headline}>Beatiful Scape</h1>
                        <h4 className={classes.caption}>
                            One of the greatest things about the sport of surfing is that you <br/> need only three
                            things: your body, <br/>
                            a surfboard, and a wave.
                        </h4>
                    </div>
                </div>
                <div className={classes.sliderItem}>
                    <img src="/assets/images/slider/first.png" className={classes.sliderImage}/>
                    <div className={classes.sliderCaption}>
                        <span className={classes.span}>THEIR</span>
                        <h1 className={classes.headline}>Ugly Car</h1>
                        <h4 className={classes.caption}>
                            One of the greatest things about the sport of surfing is that you <br/> need only three
                            things: your body, <br/>
                            a surfboard, and a wave.
                        </h4>
                    </div>
                </div>
                <div className={classes.sliderItem}>
                    <img src="/assets/images/slider/first.png" className={classes.sliderImage}/>
                    <div className={classes.sliderCaption}>
                        <span className={classes.span}>OUR</span>
                        <h1 className={classes.headline}>Perfect Spot</h1>
                        <h4 className={classes.caption}>
                            One of the greatest things about the sport of surfing is that you <br/> need only three
                            things: your body, <br/>
                            a surfboard, and a wave.
                        </h4>
                    </div>
                </div>
            </SlickSlider>
            <span className={classes.pageCounter}>
                <span className={classes.currentPage}>{currentSlide + 1}</span>
                <span className={classes.seperator}>/</span>
                <span className={classes.totalPage}>3</span>
            </span>
        </div>
    );
}

export default Slider;

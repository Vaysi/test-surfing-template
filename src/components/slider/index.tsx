import React from 'react';
import {makeStyles} from "@mui/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

import SlickSlider from "react-slick";

const useStyles = makeStyles({
    logo: {
        display: "flex",
        alignItems: "center"
    },
});

function Slider() {
    const classes = useStyles();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };

    return (
        <div className="Slider">
            <SlickSlider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </SlickSlider>
        </div>
    );
}

export default Slider;

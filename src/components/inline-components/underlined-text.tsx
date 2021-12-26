import React from 'react';
import {Link} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    underlined: {
        fontFamily: "League Spartan,arial",
        fontSize: 10.5,
        letterSpacing: 5,
        color: "#333",
        paddingBottom: 10,
        borderBottom: "2px solid #8dc1f3"
    }
});
interface Props {
    text: string;
    link?: string;
}
function UnderlinedText(props:Props) {
    const classes = useStyles();

    return (
        <>
            <Link className={classes.underlined} underline={"none"} href={props.link ?? "#"}>
                {props.text.toUpperCase()}
            </Link>
        </>
    );
}

export default UnderlinedText;

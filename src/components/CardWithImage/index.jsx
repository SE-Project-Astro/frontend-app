import React from 'react';
import {Col, Card, CardImgOverlay, CardImg, CardText, CardTitle} from "reactstrap";
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    customCard: {
        borderRadius: "16px",
        transition: 'all 0.2s ease',
        height: props => props.height,
        backgroundImage: props => `url(${props.image})`,
        backgroundSize: "cover",
        '&:hover': {
            transform: props => props.isInList ? 'scale(1.05)' : 'scale(1)',
            transition: 'all 0.2s ease',
        }
    },
    cardImgOverlay: {
        backgroundColor: props => props.isInList ? [["rgba(0,0,0,0.6)", "!important"]] : [],
        borderRadius: "16px",
        '&:hover': {
            backdropFilter: props => props.isInList ? 'blur(5px)' : 'blur(0)',
            transition: 'all 0.2s ease',
        }
    },
    cardImg: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: '16px'
    },
    cardTitle: {
        fontFamily: "Nunito, sans-serif",
        fontWeight: 'bold',
    }
})

const CardWithImage = (props) => {
    const classes = useStyles(props);
    return (
        <Card inverse className={classes.customCard}>
            <CardImgOverlay className={classes.cardImgOverlay}>
                <CardTitle tag={props.headingType} className={classes.cardTitle}>{props.cardTitle}</CardTitle>
                <CardText style={{fontFamily: "Nunito, sans-serif"}}>{props.cardText}</CardText>
                <CardText>
                    <small className="text-muted">{props.lastUpdatedText}</small>
                </CardText>
            </CardImgOverlay>
        </Card>
    );
}

export default CardWithImage;

CardWithImage.defaultProps = {
    headingType: "h4",
    height: "260px",
    cardText: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    lastUpdatedText: "Last updated 3 mins ago",
    isInList: true
}
import React from 'react';
import {Col, Card, CardImgOverlay, CardImg, CardText, CardTitle} from "reactstrap";
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    customCard: {
        borderRadius: "16px",
        transition: 'all 0.2s ease',
        '&:hover': {
            transform: 'scale(1.05)',
            transition: 'all 0.2s ease',
        }
    },
    cardImgOverlay: {
        borderRadius: "16px",
        '&:hover': {
            backdropFilter: 'blur(5px)',
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
        <Col xs="12" md="6" xl="4" >
            <Card inverse className={classes.customCard}>
                <CardImg className={classes.cardImg} width="100%" src={props.image} alt="Card image cap" />
                <CardImgOverlay className={classes.cardImgOverlay}>
                    <CardTitle tag="h4" className={classes.cardTitle}>{props.cardTitle}</CardTitle>
                    <CardText style={{fontFamily: "Nunito, sans-serif"}}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <CardText>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                </CardImgOverlay>
            </Card>
        </Col>
    );
}

export default CardWithImage;
import React from 'react';
import { Row, Col, Container} from "reactstrap";
import Aux from 'hoc/Aux';
import CardWithImage from "components/CardWithImage";
import {useSelector} from "react-redux";

const AstroObject = ({match}) => {
    const {astroObjectId} = match.params

    const astroObject = useSelector(state => state.astroObjects.find(astroObject => astroObject.id === astroObjectId))

    return (
        <Aux>
            <section className="section section-lg">
                <section className="section">
                    <Container>
                        <Row>
                            <Col xs="6">
                                <CardWithImage
                                    image={astroObject.image}
                                    headingType="h2"
                                    height="520px"
                                    cardTitle={astroObjectId.cardTitle}
                                    isInList={false}
                                />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </section>
        </Aux>
    );
}

export default AstroObject;
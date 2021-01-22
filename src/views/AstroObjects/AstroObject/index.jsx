import React from 'react';
import { Row, Col, Container} from "reactstrap";
import CardWithImage from "components/CardWithImage";
import {useSelector} from "react-redux";

import { selectAstroObjectByID } from "redux/slices/astroObjectSlice";

const AstroObject = ({match}) => {
    const {astroObjectTag} = match.params

    const astroObject = useSelector(state => selectAstroObjectByID(state, astroObjectTag));

    return (
        <React.Fragment>
            <section className="section section-lg">
                <section className="section">
                    <Container>
                        <Row>
                            <Col xs="6">
                                <CardWithImage
                                    image={astroObject.image}
                                    headingType="h2"
                                    height="520px"
                                    cardTitle={astroObject.desc}
                                    isInList={false}
                                />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </section>
        </React.Fragment>
    );
}

export default AstroObject;
import React, { useCallback } from 'react';
import CardWithImage from "../../components/CardWithImage";
import {Row, Container, Col} from 'reactstrap';
import {useHistory} from "react-router";

import { useSelector } from "react-redux";

const Index = () => {
    const astroObjects = useSelector(state => state.astroObjects)
    const history = useHistory();
    const handleOnClick = useCallback((id) => history.push(`/astro/${id}`), [history])
    return (
        <React.Fragment>
            <section className="section section-lg">
                <section className="section">
                    <Container>
                        <Row>
                            {astroObjects.map(astroObject => (
                                <Col key={astroObject.id} xs="12" md="6" xl="4" onClick={() => handleOnClick(astroObject.id)}>
                                    <CardWithImage
                                        image={astroObject.image}
                                        cardTitle={astroObject.cardTitle}
                                        cardText="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                                        lastUpdatedText="Last updated 3 mins ago"
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
            </section>
        </React.Fragment>
    );
}

export default Index;
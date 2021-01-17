import React from 'react';
import Aux from "../../hoc/Aux";
import CardWithImage from "../../components/CardWithImage";
import { Row, Container } from 'reactstrap';
import sun_card from "assets/img/sun_card.jpg";
import mars_card from "assets/img/mars_card.jpg";
import earth_card from "assets/img/earth_card.jpg";
import venus_card from "assets/img/venus_card.jpg";
import mercury_card from "assets/img/mercury_card.jpg";

const Index = () => {
    return (
        <Aux>
            <section className="section section-lg">
                <section className="section">
                    <Container>
                        <Row>
                            <CardWithImage
                                image={sun_card}
                                cardTitle="The sun"
                                cardText="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                                lastUpdatedText="Last updated 3 mins ago"
                            />
                            <CardWithImage
                                image={mercury_card}
                                cardTitle="Planet Mercury"
                                cardText="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                                lastUpdatedText="Last updated 3 mins ago"
                            />
                            <CardWithImage
                                image={venus_card}
                                cardTitle="Planet Venus"
                                cardText="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                                lastUpdatedText="Last updated 3 mins ago"
                            />
                            <CardWithImage
                                image={earth_card}
                                cardTitle="Planet Earth"
                                cardText="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                                lastUpdatedText="Last updated 3 mins ago"
                            />
                            <CardWithImage
                                image={mars_card}
                                cardTitle="Planet Mars"
                                cardText="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                                lastUpdatedText="Last updated 3 mins ago"
                            />
                        </Row>
                    </Container>
                </section>
            </section>
        </Aux>
    );
}

export default Index;
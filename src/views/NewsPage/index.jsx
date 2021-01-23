import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Button } from "reactstrap";
import CardWithImage from "components/CardWithImage";
import nasa_news_1 from "assets/img/News/nasa_news_1.png";
import nasa_news_2 from "../../assets/img/News/nasa_news_2.jpg";
import spacex_news_1 from "../../assets/img/News/spacex_news_1.webp";
import blueorigin_news_1 from "../../assets/img/News/blueorigin_news_1.jpg";

import { useHistory } from "react-router";


const NewsPage = () => {
  const history = useHistory();
  const handleOnClick = useCallback((id) => history.push(`/news/${id}`), [
    history,
  ]);

  return (
    <section className="section section-lg">
      <section className="section">
        <Container>
          <Row className="mb-4">
            <Button tag={Link} to="/newsAdd" color="info">
              Add a News
            </Button>
          </Row>
          <Row>
            <Col xs="12" xl="8" onClick={() => handleOnClick(1)}>
              <CardWithImage
                image={nasa_news_1}
                headingType="h2"
                height="550px"
                cardTitle="NASA Conducts Test of SLS Rocket Core Stage for Artemis I Moon Mission"
                cardText="NASA conducted a hot fire Saturday of the core stage for the agency’s Space Launch System (SLS) rocket that will launch the Artemis I mission to the Moon. The hot fire is the final test of the Green Run series."
                lastUpdatedText="Last updated 1 minute ago"
              />
            </Col>
            <Col xs="12" xl="4">
              <Col xs="12" style={{ padding: "0px" }}>
                <CardWithImage
                  image={nasa_news_2}
                  cardTitle="NASA to Host Virtual Briefing on February Perseverance Mars Rover Landing"
                  cardText="NASA is hosting a media briefing on Wednesday, Jan. 27, at 4:30 p.m. EST to discuss the upcoming landing of the Mars 2020 Perseverance rover. The event will air live on NASA TV, the agency's website, and YouTube."
                  lastUpdatedText="Last updated 3 mins ago"
                />
              </Col>
              <Col xs="12" style={{ padding: "0px" }}>
                <CardWithImage
                  image={spacex_news_1}
                  cardTitle="SpaceX Hopes to Launch And Land Starship No. 9 This Week"
                  cardText="SpaceX is preparing to rocket the latest prototype of its Starship spaceship thousands of feet into the air, then land it gently back on the ground."
                  lastUpdatedText="Last updated 5 mins ago"
                />
              </Col>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="6" xl="4">
              <CardWithImage
                image={blueorigin_news_1}
                cardTitle="Mission NS-14 successfully demonstrates crew capsule upgrades"
                cardText="Mission NS-14 featured a crew capsule outfitted with astronaut experience upgrades for upcoming flights with passengers onboard. Capsule upgrades included: "
                lastUpdatedText="Last updated 5 mins ago"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
};

export default NewsPage;

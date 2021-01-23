import React, { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Button } from "reactstrap";
import CardWithImage from "components/CardWithImage";
import nasa_news_1 from "assets/img/News/nasa_news_1.png";
import nasa_news_2 from "../../assets/img/News/nasa_news_2.jpg";
import spacex_news_1 from "../../assets/img/News/spacex_news_1.webp";
import blueorigin_news_1 from "../../assets/img/News/blueorigin_news_1.jpg";

import { useHistory } from "react-router";

import {fetchNews, selectAllNews} from "redux/slices/newsSlice";
import {useDispatch, useSelector} from "react-redux";



const NewsPage = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const status = useSelector(state => state.news.status);
  const newsList = useSelector(state => state.news.news)
  const handleOnClick = useCallback((id) => history.push(`/news/${id}`), [
    history,
  ]);
  useEffect(() => {
    if(status === "idle") {
      dispatch(fetchNews())
    }
  }, [status, dispatch])
  return (
    <section className="section section-lg">
      <section className="section">
        {newsList.length >= 3 ? <Container>
          <Row className="mb-4">
            <Button tag={Link} to="/newsAdd" color="info">
              Add a News
            </Button>
          </Row>
          <Row>
            <Col xs="12" xl="8" onClick={() => handleOnClick(1)}>
              <CardWithImage
                  image={newsList[0].image}
                  headingType="h2"
                  height="550px"
                  cardTitle={newsList[0].title}
                  cardText={newsList[0].cardText}
                  lastUpdatedText={newsList[0].timestamp}
              />
            </Col>
            <Col xs="12" xl="4">
              <Col xs="12" style={{padding: "0px"}}>
                <CardWithImage
                    image={newsList[1].image}
                    cardTitle={newsList[1].title}
                    cardText={newsList[1].cardText}
                    lastUpdatedText={newsList[1].timestamp}
                />
              </Col>
              <Col xs="12" style={{padding: "0px"}}>
                <CardWithImage
                    image={newsList[2].image}
                    cardTitle={newsList[2].title}
                    cardText={newsList[2].cardText}
                    lastUpdatedText={newsList[2].timestamp}
                />
              </Col>
            </Col>
          </Row>
          <Row>
            {<Col xs="12" md="6" xl="4">
              <CardWithImage
                  image={blueorigin_news_1}
                  cardTitle="Mission NS-14 successfully demonstrates crew capsule upgrades"
                  cardText="Mission NS-14 featured a crew capsule outfitted with astronaut experience upgrades for upcoming flights with passengers onboard. Capsule upgrades included: "
                  lastUpdatedText="Last updated 5 mins ago"
              />
            </Col>}
          </Row>
        </Container> : null}
      </section>
    </section>
  );
};

export default NewsPage;

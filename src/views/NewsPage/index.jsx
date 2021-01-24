import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Button } from "reactstrap";
import CardWithImage from "components/CardWithImage";
import nasa_news_1 from "assets/img/News/nasa_news_1.png";
import nasa_news_2 from "../../assets/img/News/nasa_news_2.jpg";
import spacex_news_1 from "../../assets/img/News/spacex_news_1.webp";
import blueorigin_news_1 from "../../assets/img/News/blueorigin_news_1.jpg";

import { timeDifference } from "../../helper/helper";

import { useHistory } from "react-router";

import { selectAllNews, fetchNews } from "redux/slices/newsSlice";
import { useSelector, useDispatch } from "react-redux";

const NewsPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.news.status);
  const newsList = useSelector((state) => state.news.news);
  const handleOnClick = useCallback((id) => history.push(`/news/${id}`), [
    history,
  ]);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNews());
    }
  }, [newsList, dispatch]);

  return (
    <section className="section section-lg">
      <section className="section">
        {newsList.length > 3 && (
          <Container>
            <Row className="mb-4">
              <Button tag={Link} to="/newsAdd" color="info">
                Add a News
              </Button>
            </Row>
            <Row>
              <Col xs="12" xl="8" onClick={() => handleOnClick(newsList[0].news_id)}>
                <CardWithImage
                  image={newsList[0].image}
                  headingType="h2"
                  height="550px"
                  cardTitle={newsList[0].title}
                  cardText={newsList[0].cardText}
                  lastUpdatedText={timeDifference(newsList[0].timestamp)}
                />
              </Col>
              <Col xs="12" xl="4">
                <Col
                  xs="12"
                  style={{ padding: "0px" }}
                  onClick={() => handleOnClick(newsList[1].news_id)}
                >
                  <CardWithImage
                    image={newsList[1].image}
                    cardTitle={newsList[1].title}
                    cardText={newsList[1].cardText}
                    lastUpdatedText={timeDifference(newsList[1].timestamp)}
                  />
                </Col>
                <Col
                  xs="12"
                  style={{ padding: "0px" }}
                  onClick={() => handleOnClick(newsList[2].news_id)}
                >
                  <CardWithImage
                    image={newsList[2].image}
                    cardTitle={newsList[2].title}
                    cardText={newsList[2].cardText}
                    lastUpdatedText={timeDifference(newsList[2].timestamp)}
                  />
                </Col>
              </Col>
            </Row>
            <Row>
              {newsList.slice(3).map((e) => (
                <Col xs="12" md="6" xl="4" onClick={() => handleOnClick(e.news_id)}>
                  <CardWithImage
                    image={e.image}
                    cardTitle={e.title}
                    cardText={e.cardText}
                    lastUpdatedText={timeDifference(e.timestamp)}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        )}
      </section>
    </section>
  );
};

export default NewsPage;

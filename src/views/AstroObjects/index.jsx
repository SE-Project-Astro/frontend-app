import React, { useCallback } from "react";
import CardWithImage from "../../components/CardWithImage";
import { Row, Container, Col, Button } from "reactstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectAllAstroObjects} from "redux/slices/astroObjectSlice";
import {fetchAstroObjects} from "redux/slices/astroObjectSlice";

const Index = () => {
  const dispatch = useDispatch();
  const astroObjects = useSelector(selectAllAstroObjects);
  astroObjects.map(as => console.log(as.image))
  const history = useHistory();
  const handleOnClick = useCallback((id) => history.push(`/astro/${id}`), [
    history,
  ]);
  return (
    <React.Fragment>
      <section className="section section-lg">
        <section className="section">
          <Container>
            <Row className="mb-4">
              <Button onClick={() => dispatch(fetchAstroObjects())}>
                Get AstroObjects
              </Button>
              <Button tag={Link} to="/astroAdd" color="info">
                Add a New Object
              </Button>
            </Row>
            <Row>
              {astroObjects.map((astroObject) => (
                <Col
                  xs="12"
                  md="6"
                  xl="4"
                  onClick={() => handleOnClick(astroObject.name)}
                  key={astroObject.name}
                >
                  <CardWithImage
                    image={astroObject.image}
                    cardTitle={astroObject.description}
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

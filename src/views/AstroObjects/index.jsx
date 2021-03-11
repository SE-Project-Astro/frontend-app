import React, { useCallback, useEffect } from "react";
import CardWithImage from "../../components/CardWithImage";
import { Row, Container, Col, Button } from "reactstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAllAstroObjects } from "redux/slices/astroObjectSlice";
import { fetchAstroObjects } from "redux/slices/astroObjectSlice";
import { timeDifference } from "../../helper/helper";

const Index = () => {
  const dispatch = useDispatch();
  const astroObjects = useSelector(selectAllAstroObjects);
  const status = useSelector((state) => state.astroObjects.status);
  const userType = useSelector(state => state.users.userType);
  const history = useHistory();
  const handleOnClick = useCallback((id) => history.push(`/astro/${id}`), [
    history,
  ]);

  useEffect(() => {
    if(status === "idle") {
      dispatch(fetchAstroObjects())
    }
  }, [status, dispatch])
  return (
    <React.Fragment>
      <section className="section section-lg">
        <section className="section">
          <Container>
            {userType === "admin" ? <Row className="mb-4">
              <Button tag={Link} to="/astroAdd" color="info">
                Add a New Object
              </Button>
            </Row> : null}
            <Row>
              {astroObjects.map((astroObject) => (
                <Col
                  // tag={Link}
                  // to={`/astro/${astroObject.id}`}
                  xs="12"
                  md="6"
                  xl="4"
                  onClick={() => handleOnClick(astroObject.id)}
                  key={`astro${astroObject.id}`}
                >
                  <CardWithImage
                    image={astroObject.image}
                    cardTitle={astroObject.name}
                    cardText={astroObject.cardText}
                    lastUpdatedText={timeDifference(astroObject.timestamp)}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </section>
    </React.Fragment>
  );
};

export default Index;

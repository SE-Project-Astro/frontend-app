import React, { useCallback, useEffect } from "react";
import CardWithImage from "../../components/CardWithImage";
import { Row, Container, Col, Button } from "reactstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAllAstroObjects } from "redux/slices/astroObjectSlice";
import { fetchAstroObjects } from "redux/slices/astroObjectSlice";

const Index = () => {
  const dispatch = useDispatch();
  const astroObjects = useSelector(selectAllAstroObjects);
  const status = useSelector((state) => state.astroObjects.status);
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
            <Row className="mb-4">
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
                  onClick={() => handleOnClick(astroObject.id)}
                  key={astroObject.id}
                >
                  <CardWithImage
                    image={astroObject.image}
                    cardTitle={astroObject.name}
                    cardText={astroObject.cardText}
                    lastUpdatedText={astroObject.timestamp}
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

function timeDifference(date1, date2) {
  var difference = date1.getTime() - date2.getTime();

  var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
  difference -= daysDifference * 1000 * 60 * 60 * 24;

  var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
  difference -= hoursDifference * 1000 * 60 * 60;

  var minutesDifference = Math.floor(difference / 1000 / 60);
  difference -= minutesDifference * 1000 * 60;

  var secondsDifference = Math.floor(difference / 1000);

  console.log(
    "difference = " +
      daysDifference +
      " day/s " +
      hoursDifference +
      " hour/s " +
      minutesDifference +
      " minute/s " +
      secondsDifference +
      " second/s "
  );
}

import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import {
  Row,
  Col,
  Container,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import CardWithImage from "components/CardWithImage";
import {useDispatch, useSelector} from "react-redux";
import { timeDifference } from "../../../helper/helper";

const AstroObject = ({ match }) => {
  const history = useHistory();
  const userType = useSelector(state => state.users.userType)
  const handleUpdate = useCallback(
    (id) => history.replace(`/astroUpdate/${id}`),
    [history]
  );

  const { astroObjectId } = match.params;
  const astroObject = useSelector((state) =>
    state.astroObjects.astroObjects.find(
      (astroObject) => astroObject.id === parseInt(astroObjectId)
    )
  );

  //console.log(htmlToReact(content).innerText);

  return (
    <React.Fragment>
      <section className="section section-lg">
        <section className="section">
          <Container>
            <Row>
              <h1 className="title">{astroObject.name}</h1>
            </Row>
            <Row>
              <CardWithImage
                image={astroObject.image}
                headingType="h2"
                height="520px"
                cardTitle=""
                cardText=""
                lastUpdatedText={timeDifference(astroObject.timestamp)}
                isInList={false}
              />
            </Row>

            <div style={({ backgroundColor: "white" }, { color: "white" })}>
              {htmlToReact(astroObject.description)}
            </div>
            {userType === "admin" ? <div className="my-3 text-right">
              <Button
                  onClick={() => handleUpdate(astroObject.id)}
                  color="info"
              >
                Update
              </Button>
            </div> : null}

          </Container>
        </section>
      </section>
    </React.Fragment>
  );
};

export default AstroObject;

function htmlToReact(html) {
  //var ReactDOMServer = require("react-dom/server");
  var HtmlToReactParser = require("html-to-react").Parser;
  var htmlInput = html;
  var htmlToReactParser = new HtmlToReactParser();
  var reactElement = htmlToReactParser.parse(htmlInput);
  //var reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);
  //console.log(reactHtml);
  return reactElement;
}

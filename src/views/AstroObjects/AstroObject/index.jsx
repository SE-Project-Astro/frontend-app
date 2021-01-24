import React, { useCallback } from "react";
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
import { useSelector } from "react-redux";

const AstroObject = ({ match }) => {
  const history = useHistory();
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
                cardTitle={""}
                isInList={false}
              />
            </Row>
            <div style={({ backgroundColor: "white" }, { color: "white" })}>
              {htmlToReact(astroObject.description)}
            </div>
            <div className="my-3 text-right">
              <Button
                onClick={() => handleUpdate(astroObject.id)}
                color="info"
              >
                Update
              </Button>
            </div>
            <div className="mt-5">
              <h3>{` ${2} Comments`}</h3>
              <form>
                <FormGroup>
                  <Label style={{ color: "white" }} for="userComment">
                    User Name
                  </Label>
                  <Input
                    type="textarea"
                    name="text"
                    id="userComment"
                    placeholder="Add a public comment..."
                  />
                </FormGroup>
                <div className="text-right">
                  <Button color="secondary">Cancel</Button>
                  <Button color="primary" type="submit">
                    Comment
                  </Button>
                </div>
              </form>
              <div>
                <Row className="mt-3">
                  <strong style={{ color: "white" }}>User name 1</strong>
                  <div className="ml-2">1 month ago</div>
                </Row>
                <Row>
                  <p className="mt-2 ml-4">
                    The HTML element defines text with strong importance. The
                    content inside is typically displayed in bold.
                  </p>
                </Row>
                <Row className="mt-3">
                  <strong style={{ color: "white" }}>User name 2</strong>
                  <div className="ml-2">1 month ago</div>
                </Row>
                <Row>
                  <p className="mt-2 ml-4">
                    The HTML element defines text with strong importance. The
                    content inside is typically displayed in bold.
                  </p>
                </Row>
              </div>
            </div>
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

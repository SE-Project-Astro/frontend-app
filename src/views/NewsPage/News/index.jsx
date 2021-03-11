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
import { timeDifference } from "../../../helper/helper";
import CardWithImage from "components/CardWithImage";
import { useSelector } from "react-redux";

const News = ({ match }) => {
  const history = useHistory();
  const handleUpdate = useCallback(
    (id) => history.replace(`/newsUpdate/${id}`),
    [history]
  );
  const { newsId } = match.params;
  const news = useSelector((state) =>
    state.news.news.find((newsItem) => newsItem.news_id === parseInt(newsId))
  );

  console.log(news);

  return (
    <React.Fragment>
      <section className="section section-lg">
        <section className="section">
          <Container>
            <Row>
              <h1 className="title">{news.title}</h1>
            </Row>
            <Row>
              <CardWithImage
                image={news.image}
                headingType="h2"
                height="520px"
                cardTitle=""
                cardText=""
                isInList={false}
                lastUpdatedText={timeDifference(news.timestamp)}
              />
            </Row>
            <div style={({ backgroundColor: "white" }, { color: "white" })}>
              {htmlToReact(news.description)}
            </div>

          </Container>
        </section>
      </section>
    </React.Fragment>
  );
};

export default News;

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

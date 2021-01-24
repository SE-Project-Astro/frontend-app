import React, { Component, useState, useEffect } from "react";
import {Link, useLocation} from "react-router-dom";
import TextEditor from "../../components/TextEditor/TextEditor";
//import TextEditor from "../../components/TextEditor/RichTextEditor";
import { useSelector } from "react-redux";

// reactstrap components
import { FormGroup, Label, Input, Button, Container } from "reactstrap";

export default function AddNews({ match }) {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { newsId } = match.params;
  const news = useSelector((state) =>
    state.news.news.find((newsItem) => newsItem.news_id === parseInt(newsId))
  );
  useEffect(() => {
    if (news) {
      setTitle(news.title);
      setImageUrl(news.image);
      setContent(news.description);
      //console.log(astroObject);
    }
  }, []);

  useEffect(() => {
    if(newsId) {
      console.log(newsId);
    }
  }, [])

  const handleTextAreaChange = (newtextAreaValue) => {
    setContent(newtextAreaValue);
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  const handleSubmit = () => {
    console.log("content ", content);
  };

  const handleImageUrlChange = (e) => {
    const imageUrl = e.target.value;
    setImageUrl(imageUrl);
  };

  return (
    <div className="section section-examples" data-background-color="black">
      <div className="space-50" />
      <Container className="">
        <form>
          <FormGroup>
            <Label for="objName">Title</Label>
            <Input
              type="text"
              name="title"
              id="title"
              value={title}
              placeholder="Enter the Title"
              onChange={(e) => handleTitleChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="images">Images</Label>

            <Input
              id="images"
              type="url"
              name="images"
              value={imageUrl}
              placeholder="Enter image url"
              onChange={(e) => handleImageUrlChange(e)}
            />
          </FormGroup>

          <FormGroup>
            <Label>Content</Label>

            <TextEditor
              value={content}
              onChange={(e) => handleTextAreaChange(e)}
            />
          </FormGroup>
          <Button
            tag={Link}
            to="/"
            onClick={() => handleSubmit()}
            color="primary"
            disabled={!isValidForm(title, imageUrl, content)}
          >
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
}

function isValidForm(title, imageUrl, content) {
  if (
    typeof title === "string" &&
    title !== "" &&
    typeof content === "string" &&
    content !== "" &&
    isImageUrl(imageUrl)
  ) {
    return true;
  } else {
    return false;
  }
}

function isImageUrl(url) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(url) && url.match(/\.(jpeg|jpg|gif|png)$/) != null;
}

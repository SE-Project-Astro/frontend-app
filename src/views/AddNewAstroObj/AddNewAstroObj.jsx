import React, { Component, useState, useEffect } from "react";
import {Link, useLocation} from "react-router-dom";
import TextEditor from "../../components/TextEditor/QuilEditor";
//import TextEditor from "../../components/TextEditor/RichTextEditor";
import {useDispatch, useSelector} from "react-redux";

// reactstrap components
import { FormGroup, Label, Input, Button, Container } from "reactstrap";
import {addNewAstroObject, updateAstroObject} from "../../redux/slices/astroObjectSlice";

export default function AddNewAstroObj({ match }) {
  const dispatch = useDispatch()
  const [imageUrl, setImageUrl] = useState("");
  const [objName, setObjName] = useState("");
  const [cardText, setCardText] = useState("");
  const [content, setContent] = useState("");
  const [addOrUpdate, setValue] = useState("add")

  const { astroObjectId } = match.params;
  const astroObject = useSelector((state) =>
      state.astroObjects.astroObjects.find(
          (astroObject) => astroObject.id === parseInt(astroObjectId)
      )

  );
  useEffect(() => {
    if (astroObject) {
      setObjName(astroObject.name);
      setImageUrl(astroObject.image);
      setContent(astroObject.description);
      setCardText(astroObject.cardText);
    }
  }, []);

  useEffect(() => {
    if(astroObjectId) {
      setValue("update");
    }
  }, [])

  const handleTextAreaChange = (newtextAreaValue) => {
    setContent(newtextAreaValue);
  };
  const handleCardTextChange = (e) => {
    const cardText = e.target.value;
    setCardText(cardText);
  };

  const handleObjNameChange = (e) => {
    const objName = e.target.value;
    setObjName(objName);
  };
  const handleSubmit = (event) => {
    if(addOrUpdate === "add") {
      dispatch(addNewAstroObject(objName, imageUrl, cardText, content))
    }
    else {
      dispatch(updateAstroObject(parseInt(astroObjectId),cardText, imageUrl, content))
    }
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
            <Label for="objName">Object Name</Label>
            <Input
              type="text"
              name="objName"
              id="objName"
              value={objName}
              placeholder="Enter the Object Name"
              onChange={(e) => handleObjNameChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="cardText">Card Text</Label>
            <Input
                type="text"
                name="cardText"
                id="cardText"
                value={cardText}
                placeholder="Enter the Card Text"
                onChange={(e) => handleCardTextChange(e)}
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
            <Label>Description</Label>

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
            disabled={!isValidForm(objName, imageUrl, content)}
          >
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
}

function isValidForm(objName, imageUrl, content) {
  if (
    typeof objName === "string" &&
    objName !== "" &&
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

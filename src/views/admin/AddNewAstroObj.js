import React, { Component, useState, useRef } from "react";
import { Link } from "react-router-dom";
import JoditEditor from "jodit-react";

// reactstrap components
import {
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";

const configJoditEditor = {
  //theme: "dark",
  readonly: false, // all options from https://xdsoft.net/jodit/doc/
};
class AddNewAstroObj extends Component {
  state = {
    images: [],
    imageUrl: "",

    editor: null,
    objName: "",
    content: '<p><span style="color: rgb(0, 0, 0);">&nbsp;</span><br></p>',
  };

  handleTextAreaChange = (newtextAreaValue) => {
    const content = newtextAreaValue;
    console.log(content);
    this.setState({ content });
  };
  handleObjNameChange = (e) => {
    const objName = e.target.value;
    this.setState({ objName });
  };
  handleSubmit = () => {
    console.log("content ", this.state.content);
  };
  handleAddImageUrl = () => {
    const images = [...this.state.images, this.state.imageUrl];
    const imageUrl = "";
    this.setState({ images });
    this.setState({ imageUrl });
    //console.log(images);
  };
  handleImageUrlChange = (e) => {
    const imageUrl = e.target.value;
    this.setState({ imageUrl });
  };
  handleDeleteImage = (e) => {
    var images = [...this.state.images]; // make a separate copy of the array
    var index = images.indexOf(e);
    if (index !== -1) {
      images.splice(index, 1);
      this.setState({ images });
    }
  };

  isValidForm = () => {
    if (
      typeof this.state.objName === "string" &&
      this.state.objName !== "" &&
      typeof this.state.content === "string" &&
      this.state.content !== "" &&
      this.state.content !==
        '<p><span style="color: rgb(0, 0, 0);">&nbsp;</span><br></p>'
    ) {
      return true;
    } else {
      return false;
    }
  };

  isImageUrl() {
    const url = this.state.imageUrl;
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

  render() {
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
                placeholder="Enter Object Name"
                onChange={this.handleObjNameChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="images">Images</Label>

              <Input
                id="images"
                type="url"
                name="images"
                value={this.state.imageUrl}
                placeholder="Enter image url"
                onChange={this.handleImageUrlChange}
              />
              <Button
                onClick={this.handleAddImageUrl}
                className="btn-round btn-icon mb-2"
                color="primary"
                disabled={!this.isImageUrl()}
              >
                <i className="tim-icons icon-simple-add" />
              </Button>
            </FormGroup>
            <Row>
              {this.state.images.map((img) => (
                <Col key={img} sm="3">
                  <img alt="..." className="img-raised" src={img} />
                  <Button
                    className="btn-round btn-icon"
                    size="sm"
                    color="primary"
                    onClick={() => this.handleDeleteImage(img)}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </Button>
                </Col>
              ))}
            </Row>
            <FormGroup>
              <Label>Description</Label>
              <JoditEditor
                className="text-dark bg-dark"
                ref={this.state.editor}
                config={configJoditEditor}
                value={this.state.content}
                tabIndex={2} // tabIndex of textarea
                onChange={this.handleTextAreaChange}
              />
            </FormGroup>
            <Button
              onClick={this.handleSubmit}
              color="primary"
              disabled={!this.isValidForm()}
            >
              Submit
            </Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default AddNewAstroObj;

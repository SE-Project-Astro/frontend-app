import React, { Component } from "react";
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
} from "reactstrap";

const configJoditEditor = {
  theme: "dark",
  readonly: false, // all options from https://xdsoft.net/jodit/doc/
};

class AddNews extends Component {
  state = {
    editor: null,
    title: "",
    content: "",
  };

  handleTextAreaChange = (newtextAreaValue) => {
    const content = newtextAreaValue;
    this.setState({ content });
  };
  handleTitleChange = (newTitle) => {
    const title = newTitle.target.value;
    this.setState({ title });
  };
  handleSubmit = () => {
    console.log("content ", this.state.content);
  };

  isValidForm = () => {
    if (
      typeof this.state.title === "string" &&
      this.state.title !== "" &&
      typeof this.state.content === "string" &&
      this.state.content !== "" &&
      this.state.content !==
        '<><span style="color: rgb(0, 0, 0);">&nbsp;</span><br></>'
    ) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return (
      <div className="section section-examples" data-background-color="black">
        <div className="space-50" />
        <Container className="">
          <form>
            <FormGroup>
              <Label for="newsTitle">Title</Label>
              <Input
                type="text"
                name="newsTitle"
                value={this.state.title}
                id="newsTitle"
                placeholder="Enter News Title"
                onChange={this.handleTitleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Content</Label>
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

export default AddNews;

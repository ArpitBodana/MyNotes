import React, { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { addText } from "../redux/action";
import { MapState, MapDispatch } from "../redux/types";
import Alert from "react-bootstrap/Alert";

type PropsType = {
  text: string[];
  addText: any;
};

function TextInput(props: PropsType) {
  const [itext, setText] = useState("");
  const [input, setInput] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const addNote = () => {
    if (itext === "") {
      inputRef.current.focus();
      setInput(true);
      setTimeout(() => setInput(false), 5000);
    } else {
      setInput(false);
      props.addText(itext);
      setText("");
      inputRef.current.value = "";
    }
  };

  return (
    <Container className="text-center">
      {input && (
        <Alert variant="danger">Please Provide Some Text Before Adding</Alert>
      )}
      <Form.Group className="mt-3">
        <Form.Control
          className="mt-4"
          type="text"
          placeholder="Add text here....."
          size="lg"
          onChange={(e) => setText(e.target.value)}
          ref={inputRef}
        />
      </Form.Group>
      <Form.Group>
        <Button className="mt-4" variant="primary" onClick={addNote}>
          Add Note
        </Button>
      </Form.Group>
      <hr/>
    </Container>
  );
}
const mapStateToProps = (state: MapState) => {
  return {
    text: state.text,
  };
};
const mapDispatchToProps = (dispatch: MapDispatch) => {
  return {
    addText: (text: string) => dispatch(addText(text)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TextInput);

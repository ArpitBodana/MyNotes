import React from "react";
import Container from "react-bootstrap/Container";
import { MapState } from "../redux/types";
import { connect } from "react-redux";
import { Button, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { reset } from "../redux/action";
import Card from "react-bootstrap/Card";

type screenTypes = {
  text: string[];
};

function Screen(props: screenTypes) {
  const dispatch = useDispatch();
  const clearScreen = () => {
    if (props.text.length === 0) {
      alert("Screen is Empty nothing to clear");
    } else {
      dispatch(reset());
    }
  };

  const downloadFile = () => {
    if (props.text.length === 0) {
      alert("Nothing to dowload ");
    } else {
      const element = document.createElement("a");
      const file = new Blob(props.text, {
        type: "text/plain",
      });
      element.href = URL.createObjectURL(file);
      element.download = "MyNotes.txt";
      document.body.appendChild(element);
      element.click();
    }
  };
  return (
    <Container className="bg-light mt-4 ">
      <div className="d-flex justify-content-between">
        <h5 className="mt-2">Options</h5>{" "}
        <Button variant="warning" size="sm" onClick={downloadFile}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M144 480C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144zM303 392.1C312.4 402.3 327.6 402.3 336.1 392.1L416.1 312.1C426.3 303.6 426.3 288.4 416.1 279C407.6 269.7 392.4 269.7 383 279L344 318.1V184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184V318.1L256.1 279C247.6 269.7 232.4 269.7 223 279C213.7 288.4 213.7 303.6 223 312.1L303 392.1z" />
          </svg>
          Download 
        </Button>
        <Button variant="danger" size="sm" onClick={clearScreen}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M93.13 257.7C71.25 275.1 53 313.5 38.63 355.1L99 333.1c5.75-2.125 10.62 4.749 6.625 9.499L11 454.7C3.75 486.1 0 510.2 0 510.2s206.6 13.62 266.6-34.12c60-47.87 76.63-150.1 76.63-150.1L256.5 216.7C256.5 216.7 153.1 209.1 93.13 257.7zM633.2 12.34c-10.84-13.91-30.91-16.45-44.91-5.624l-225.7 175.6l-34.99-44.06C322.5 131.9 312.5 133.1 309 140.5L283.8 194.1l86.75 109.2l58.75-12.5c8-1.625 11.38-11.12 6.375-17.5l-33.19-41.79l225.2-175.2C641.6 46.38 644.1 26.27 633.2 12.34z" />
          </svg>
          Clear 
        </Button>
      </div>
      <Row className="mt-4">
        {props.text.map((item, index) => {
          return (
            <div key={index} className="d-flex">
              <Card
                body
                border="warning"
                className="points text-break lh-base w-100"
              >
                <Card.Title>{index + 1}</Card.Title>
                <Card.Text>{item}</Card.Text>
              </Card>
            </div>
          );
        })}
      </Row>
      <hr />
    </Container>
  );
}

const mapStateToProps = (state: MapState) => {
  return {
    text: state.text,
  };
};

export default connect(mapStateToProps)(Screen);

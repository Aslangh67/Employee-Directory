import React from "react";
import Col from "./Col";
import Row from "./Row";

function EmpDetail(props) {
  return (
    <Row >
      <Col size="md-3">
      <img alt={props.name} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      </Col>
      <Col size="md-3">
      <h6> {props.name}</h6>
      </Col>
      <Col size="md-3">
      <h6>Age: {props.age}</h6>
      </Col>
      <Col size="md-3">
      <h6>Phone: {props.phone}</h6>
      </Col>
      </Row>
    
  );
}

export default EmpDetail;

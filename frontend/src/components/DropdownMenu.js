import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const DropdownMenu = () => (
  <Container className="py-5">
    <h3 className="text-center">Select Grade</h3>
    <Row className="mt-4">
      <Col md={4}>
        <Form.Select>
          <option>1st-3rd</option>
          <option>4th-5th</option>
        </Form.Select>
      </Col>
      <Col md={4}>
        <Form.Select>
          <option>6th-8th</option>
          <option>9th-10th</option>
        </Form.Select>
      </Col>
      <Col md={4}>
        <Form.Select>
          <option>11th-12th</option>
        </Form.Select>
      </Col>
    </Row>
  </Container>
);

export default DropdownMenu;

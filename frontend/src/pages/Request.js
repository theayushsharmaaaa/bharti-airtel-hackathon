import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Request = () => (
  <Container className="py-5">
    <h2>Raise a Request</h2>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="Enter subject" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Grade</Form.Label>
        <Form.Select>
          <option>1st-3rd</option>
          <option>4th-5th</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary">Submit</Button>
    </Form>
  </Container>
);

export default Request;

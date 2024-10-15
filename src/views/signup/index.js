import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext"; // Ensure this import is uncommented
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Alert,
} from "reactstrap";
import useSignUp from "./useSignup";

const SignUpPage = () => {
  const { login } = useAuth();


  const { handleSignUp, error,success } = useSignUp();

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col md={{ size: 4, offset: 4 }}>
          <Card>
            <CardBody>
              <CardTitle tag="h3" className="text-center mb-4">
                Sign Up
              </CardTitle>
              {error && <Alert color="danger">{error}</Alert>}
              {success && <Alert color="success">{success}</Alert>}
              <Form onSubmit={handleSignUp}>
                <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName" 
                    placeholder="Enter your first name"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email" 
                    placeholder="Enter your email"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    name="password" 
                    placeholder="Enter your password"
                    required
                  />
                </FormGroup>
                <Button color="primary" block type="submit">
                  Sign Up
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;

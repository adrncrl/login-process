import React, { useState } from "react";
import { AuthContext, useAuth } from "../../context/AuthContext";
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
import useLogin from "./useLogin";
import { ToastContainer } from "react-toastify";
const LoginPage = () => {
  const { login } = useAuth();
  const { handleLogin, error } = useLogin(login); 

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 hw-60">
      <Row className="w-100">
        <Col md={{ size: 4, offset: 4 }}>
          <Card>
            <CardBody>
              <CardTitle tag="h3" className="text-center mb-4">
                Login
              </CardTitle>
              {error && <Alert color="danger">{error}</Alert>}
              <Form onSubmit={handleLogin} noValidate>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    name="email" 
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    name="password" 
                    required
                  />
                </FormGroup>
                <Button color="primary" block type="submit">
                  Login
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;

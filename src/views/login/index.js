import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

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

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        username,
        password,
      });

      const { token } = response.data;
      console.log(token);

      login(token);
    } catch (error) {
      setError("Invalid username or password");
    }
  };

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
              <Form onSubmit={handleLogin}>
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input
                    type="text"
                    id="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

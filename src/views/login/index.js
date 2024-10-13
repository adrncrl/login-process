import React, { useState, useContext } from 'react';
//import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import Cookies from 'js-cookie';
import {
  Button, Form, FormGroup, Label, Input, Container, Row, Col, Card, CardBody, CardTitle, Alert,
} from 'reactstrap';

const LoginPage = () => {
  // const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Make API call to login endpoint
  //     const response = await axios.post('http://localhost:your_backend_port/api/login', {
  //       username,
  //       password,
  //     });

  //     // Assuming backend sends back a token
  //     const { token } = response.data;

  //     // Save token to cookies and set authentication state
  //     login(token);
  //   } catch (error) {
  //     setError('Invalid username or password');
  //   }
  // };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 hw-60">
      <Row className="w-100">
        <Col md={{ size: 4, offset: 4 }}>
          <Card>
            <CardBody>
              <CardTitle tag="h3" className="text-center mb-4">Login</CardTitle>
              {error && <Alert color="danger">{error}</Alert>}
              <Form onSubmit={""}>
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
                <Button color="primary" block type="submit">Login</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;

import React, { useState, useContext } from 'react';
import axios from 'axios';
//import { AuthContext } from '../context/AuthContext';
import {
  Button, Form, FormGroup, Label, Input, Container, Row, Col, Card, CardBody, CardTitle, Alert,
} from 'reactstrap';

const SignUpPage = () => {
 // const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // const handleSignUp = async (e) => {
  //   e.preventDefault();
    
   
  //   if (password !== confirmPassword) {
  //     setError('Passwords do not match');
  //     return;
  //   }

  //   try {
  //     // Make API call to sign up endpoint
  //     const response = await axios.post('http://localhost:your_backend_port/api/signup', {
  //       username,
  //       email,
  //       password,
  //     });

  //     const { token } = response.data;

  //     // Save token and set authentication state
  //     login(token);
  //     setSuccess('Account created successfully!');
  //     setError('');
  //   } catch (error) {
  //     setError('Error signing up. Please try again.');
  //     setSuccess('');
  //   }
  // };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col md={{ size: 4, offset: 4 }}>
          <Card>
            <CardBody>
              <CardTitle tag="h3" className="text-center mb-4">Sign Up</CardTitle>
              {error && <Alert color="danger">{error}</Alert>}
              {success && <Alert color="success">{success}</Alert>}
              <Form onSubmit={""}>
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input
                    type="text"
                    id="username"
                    placeholder="Enter your username"
                    // value={username}
                    // onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="confirmPassword">Confirm Password</Label>
                  <Input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    // value={confirmPassword}
                    // onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </FormGroup>
                <Button color="primary" block type="submit">Sign Up</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;

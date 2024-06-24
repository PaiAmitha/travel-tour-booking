import React, { useState } from "react";
import { Tab, Tabs, Modal, Button, Form, InputGroup } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import "./Modal.css"; // Import the CSS file
import glogo from '../Assets/google.jpg';

function LoginModal(props) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  function handleGLogin () {
    console.log('Login with Google');
  }
  function handleLogin(e) {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
    props.onHide(); // Close the modal after handling login
  }

  function handleSignup(e) {
    e.preventDefault();
    console.log(email, password); // Assuming you want to handle signup similarly
    setEmail("");
    setPassword("");
    props.onHide(); // Close the modal after handling signup
  }

  return (
    <Modal {...props} centered>
      <Modal.Body>
        <Tabs
          defaultActiveKey="login"
          id="noanim-tab-example"
          className="mb-3 d-flex justify-content-center custom-tabs"
        >
          <Tab eventKey="login" title="Login">
            <div className="d-flex justify-content-center mb-3">
              <Button variant="light" className="google-btn btn-primary" onClick={handleGLogin}>
              <img src={glogo} alt="Google Logo" className="google-logo" />
              {/* <i class="bi bi-google"></i> {"  "} */}
                LOG IN WITH GOOGLE
              </Button>
            </div>

            <div className="d-flex justify-content-center align-items-center mb-3">
              <hr className="flex-grow-1" />
              <span className="mx-2">or</span>
              <hr className="flex-grow-1" />
            </div>

            <Form>
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <InputGroup>
                  <InputGroup.Text>
                    <i className="bi bi-envelope-at-fill"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="Enter email address"
                    size='sm'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-3">
                <InputGroup>
                  <InputGroup.Text>
                    <i className="bi bi-key"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    size='sm'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>

              <div className="d-flex justify-content-center">
                <Button variant="primary" onClick={handleLogin}>
                  Login
                </Button>
              </div>
            </Form>
          </Tab>
          <Tab eventKey="signup" title="Sign Up">
            <Form>
              <Form.Group controlId="formBasicName" className="mb-3">
                <InputGroup>
                  <InputGroup.Text>
                    <i className="bi bi-person-fill"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    size="sm"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formBasicName" className="mb-3">
                <InputGroup>
                  <InputGroup.Text>
                    <i className="bi bi-person"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    size="sm"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mb-3">
                <InputGroup>
                  <InputGroup.Text>
                    <i className="bi bi-envelope-at-fill"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    size="sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-3">
                <InputGroup>
                  <InputGroup.Text>
                    <i className="bi bi-key"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    size="sm"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formBasicConfirmPassword" className="mb-3">
                <InputGroup>
                  <InputGroup.Text>
                    <i className="bi bi-key-fill"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    size="sm"
                    value={cpassword}
                    onChange={(e) => setCpassword(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>

              <div className="d-flex justify-content-center">
                <Button variant="primary" onClick={handleSignup}>
                  Sign Up
                </Button>
              </div>
            </Form>
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;

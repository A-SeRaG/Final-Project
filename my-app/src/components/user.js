import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const UserProfile = () => {
  return (
   
    <Container className="mt-5 profile">

      <Row className="justify-content-center">
        <Col lg={8} md={10} sm={12}>
          {/* Profile Picture */}

          {/* User Info Form */}
          <Form>
            <Row className="mb-3">
              {/* Email */}
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="form-control-lg"
                />
              </Form.Group>

              {/* Password */}
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="form-control-lg"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Update Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="form-control-lg"
                />
              </Form.Group>
            </Row>

            {/* Address */}
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                className="form-control-lg"
              />
            </Form.Group>

        

            {/* City, State, Zip */}
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control className="form-control-lg" />
              </Form.Group>
                  </Row>
            {/* Checkbox */}
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                variant="primary"
                type="submit"
                className="btn-lg w-50"
                style={{
                  backgroundColor: '#AF286E',
                  border: 'none',
                  fontWeight: 'bold',
                }}
              >
                Save Changes
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";


const CategoryBasic = () => {
  return (
    <Container className="category">
      <span className="bordy"> category </span>
      <h2> All category is here: </h2>
      <Row style={{ marginTop: "20px" }}>
        <Col>
          <Card>
            <Image src="http://localhost:8080/uploads/women/1736152842158.jpg" fluid />
            <Card.Body>
              <Card.Title>women</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={5}>
          <Card style={{ backgroundColor: "var(--second-color)" }}>
            <Card.Body>
              <h3 style={{ fontSize: "20px" }}>Explore our Top categories </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Image src="http://localhost:8080/uploads/men/1736154692046.jpg" fluid /><Card.Title>men</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col>
          <Card>
            <Card.Body>
              <Image src="http://localhost:8080/uploads/kids/1736155098752.jpg" fluid /><Card.Title>childern</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={5}>
          {" "}
          <Card>
            <Image src="http://localhost:8080/uploads/shoes/1736153677185.jpg" fluid />
            <Card.Body>
              <Card.Title>shoes</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {" "}
          <Card>
            <Image src="http://localhost:8080/uploads/bags/1736154380153.jpg" fluid />
            <Card.Body>
              <Card.Title>bags</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <span className="ending"></span>
    </Container>
  );
};

export default CategoryBasic;

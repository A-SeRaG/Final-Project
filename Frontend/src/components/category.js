import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const CategoryBasic = () => {
  return (
    <Container className="category">
      <span className="bordy"> category </span>
      <h2> All category are here: </h2>
      <Row style={{ marginTop: "20px" }}>
        <Col>
          <Card style={{ textAlign: "center" }}>
            <Card.Body>
              <Image
                src="http://localhost:8080/uploads/women/1736152842158.jpg"
                style={{
                  height: "300px",
                  width: "300px",
                  objectFit: "cover",
                }}
                fluid
              />
              <Card.Title>women</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ backgroundColor: "var(--second-color)" }}>
            <Card.Body
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            >
              <h3 style={{ fontSize: "20px" }}>Explore our Top categories </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ textAlign: "center" }}>
            <Card.Body>
              <Image
                src="http://localhost:8080/uploads/men/1736154692046.jpg"
                style={{
                  height: "300px",
                  width: "300px",
                  objectFit: "cover",
                }}
                fluid
              />
              <Card.Title>men</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col>
          <Card style={{ textAlign: "center" }}>
            <Card.Body>


            <Image  src=''  
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
              }}
    fluid
  />
  

              <Image
                src="http://localhost:8080/uploads/kids/1736155058944.jpg"
                style={{
                  height: "300px",
                  width: "300px",
                  objectFit: "cover",
                }}
                fluid
              />

              <Card.Title>childern</Card.Title>

            </Card.Body>
          </Card>
        </Col>
        <Col>
          {" "}
          <Card style={{ textAlign: "center" }}>
            <Image
                       style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                      }}
            fluid
              src="../images/category/Shoes.jpg"
         
            />
            <Card.Body>
              <Card.Title>shoes</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {" "}
          <Card style={{ textAlign: "center" }}>
            <Image
              src="http://localhost:8080/uploads/bags/1736154380153.jpg"
              style={{
                height: "300px",
                width: "300px",
                objectFit: "cover",
              }}
    fluid
            />
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

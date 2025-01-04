import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cardcomponent from "./card";
import { Link } from "react-router-dom";


const Fullporducts = () => {
    return (
        <Container className="fullproduct">
            <div className="link-slide">
                {" "}
                <ul className="d-flex " style={{ listStyle: "none" }}>
                    <li>
                        {" "}
                        <Link
                            to="/home"
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            Home
                        </Link>
                    </li>
                    <span>/</span>
                    <li>
                        {" "}
                        <Link
                            to="/Fullproducts"
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            Products
                        </Link>
                    </li>
                </ul>
            </div>
            <Row>
                <Col>
                    <Col>
                        <Cardcomponent
                            ImageSrc="path_to_your_image.jpg"
                            title="Product Name"
                        />
                    </Col>
                    <Col>
                        <Cardcomponent
                            ImageSrc="path_to_your_image.jpg"
                            title="Product Name"
                        />
                    </Col>
                    <Col>
                        <Cardcomponent
                            ImageSrc="path_to_your_image.jpg"
                            title="Product Name"
                        />
                    </Col>
                </Col>

                {/* anthor col */}
                <Col>
                    <Col>
                        <Cardcomponent
                            ImageSrc="path_to_your_image.jpg"
                            title="Product Name"
                        />
                    </Col>
                    <Col>
                        <Cardcomponent
                            ImageSrc="path_to_your_image.jpg"
                            title="Product Name"
                        />
                    </Col>
                    <Col>
                        <Cardcomponent
                            ImageSrc="path_to_your_image.jpg"
                            title="Product Name"
                        />
                    </Col>
                </Col>
                {/* another col */}
                <Col>
                    <Col>
                        <Cardcomponent
                            ImageSrc="path_to_your_image.jpg"
                            title="Product Name"
                        />
                    </Col>
                    <Col>
                        <Cardcomponent
                            ImageSrc="path_to_your_image.jpg"
                            title="Product Name"
                        />
                    </Col>
                    <Col>
                        <Cardcomponent
                            ImageSrc="path_to_your_image.jpg"
                            title="Product Name"
                        />
                    </Col>
                </Col>
                {/* another col */}
                <Col>
                    <Col>
                        <Cardcomponent
                            ImageSrc="path_to_your_image.jpg"
                            title="Product Name"
                        />
                    </Col>
                    <Col>
                        <Cardcomponent
                            ImageSrc="path_to_your_image.jpg"
                            title="Product Name"
                        />
                    </Col>
                    <Col>
                        <Cardcomponent
                            ImageSrc="path_to_your_image.jpg"
                            title="Product Name"
                        />
                    </Col>
                </Col>
                {/* another col */}
                <Col>
                    <Col>
                        <Cardcomponent
                            ImageSrc="path_to_your_image.jpg"
                            title="Product Name"
                        />
                    </Col>
                    <Col>
                        <Cardcomponent
                            ImageSrc="path_to_your_image.jpg"
                            title="Product Name"
                        />
                    </Col>
                    <Col>
                        <Cardcomponent
                            ImageSrc="path_to_your_image.jpg"
                            title="Product Name"
                        />
                    </Col>
                </Col>
                {/* another col */}
                <Col>
                    <Col>
                        <Cardcomponent
                            ImageSrc="path_to_your_image.jpg"
                            title="Product Name"
                        />
                    </Col>
                    <Col>
                        <Cardcomponent
                            ImageSrc="path_to_your_image.jpg"
                            title="Product Name"
                        />
                    </Col>
                    <Col>
                        <Cardcomponent
                            ImageSrc="path_to_your_image.jpg"
                            title="Product Name"
                        />
                    </Col>
                </Col>
            </Row>
        </Container>
    );
};
export default Fullporducts;

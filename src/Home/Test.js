import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Jumbotron,
  ListGroup,
  ListGroupItem,
  Nav,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import ACimage from '../'
// import Image from "next/image";
import "./Test.css";

const Test = () => {
 return (
    <>
      <Container fluid>
        <Card>
          {/* <Image
            alt=""
            src="/assets/images/product.png"
            width={1890}
            height={500}
            className=" overlay"
          /> */}
          <Card.ImgOverlay>
            <Card.Title className="hd">Products & Solutions</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </Container>
      <br />
      <br />
      <Container>
        <Row>
          <Col
            md={{ span: 6, offset: 3 }}
            className="tab-div mt-5 justify-content-space align-content-center"
          >
            <Nav variant="pills" className="flex-row ">
              <Nav.Item>
                <Nav.Link eventKey="1">All Products</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2">Fan Kits</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3">AC Kits</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="4">Inverters</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="5"> Solar Panels</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="6"> EVM</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <Container fluid>
        <Row className="containerbg">
          <Col md={6} className=" d-flex justify-content-end ">
            {/* <Image
              alt=""
              src="/assets/images/fan.png"
              width={300}
              height={250}
            /> */}
          </Col>
          <Col md={6} className=" mt-4 ml-2">
            <h3 className="content-hd">RapidFan Kit</h3>
            <span className="content-subhd">Fan Controller Kit</span>
            <p className="  content-left">
              High Efficiency and High-Power Factor.
              <br />
              Reliable and Durable.
              <br />
              Battery or Solar Panel Option
              <br />
              IR or RF Remote Control Option
              <br />
              Low Heat Dissipation of components.
              <br />
              Ultra-Low Noise operation of motor.
              <br />
              6 speed ranging from 100-350 rpm. <br />
              PCB dimensions can be customized.
            </p>
            <Button className=" content-btn">Learn More</Button>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <Container fluid>
        <div className="Ackitstyling">
            <div classname="Ackitdetail">
              <h3>Rapid AC Kit</h3>
              <span>Rapid AC Kit</span>
              <p>
                Light weight On-Board Inductor.Light weight On-Board
                Inductor.PCB dimensions is customizable. RoHS compliant. IoT
                Integration. Android & iOS Application. Software & PCB is
                customizable.
              </p>
          </div>
          <div>
            <img
              alt=""
              src={ACimage}
              width={300}
              height={250}
            />
          </div>
        </div>
        {/* <Row className="containerwhite">
          <Col md={6} className="d-flex justify-content-center">
            <h3 className="content-right">Rapid AC Kit</h3>
            <span className="content-subright">Rapid AC Kit</span>
            <p className="content-left">
              Light weight On-Board Inductor.
              <br />
              Light weight On-Board Inductor.
              <br />
              PCB dimensions is customizable.
              <br />
              RoHS compliant.
              <br />
              IoT Integration.
              <br />
              Android & iOS Application.
              <br />
              Software & PCB is customizable.
              <br />
            </p>
            {/* <Button className=" content-btn">Learn More</Button>
          </Col>
          <Col md={6} className=" d-flex justify-content-start ">
            <Image
              alt=""
              src="/assets/images/ac.png"
              width={300}
              height={250}
            />
          </Col>
        </Row> */}
      </Container>
    </>
  );
}

export default Test
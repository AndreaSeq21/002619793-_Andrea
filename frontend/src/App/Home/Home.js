import React from 'react';
import Navbar from '../Navbar/Navbar';
import myImg from '../images/kevin-bhagat-zNRITe8NPqY-unsplash.jpg';
import myImg2 from '../images/istockphoto-1305999733-170667a.jpg';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
    <div>
      <Navbar /><br/><br/><br/>
      <Row className="justify-content-md-center">
        <Col md="6" style={{ width: "600px"}}>
          <Card className="mb-4" style={{ height: "600px" }}>
            <Card.Img variant="top" src={myImg} style={{ width: "574px", height: "300px"}}/>
            <Card.Body>
              <Card.Title className="font-weight-light">
                Why Northeastern University?
              </Card.Title>
              <Card.Text>
                Northeastern students value Cooperative Education (co-op for short) as a key differentiator in their academic experience.
                Because co-ops are full-time and typically six months long, they truly get a sense of the professional world and develop 
                the skills needed to be successful in today's global business environment. Through co-op you will begin to define and live 
                your professional purpose (and even rule out what you don't like). The year+ of professional experience you'll graduate with
                will give you a heads up on the competition so you're ready to take on the world!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="6" style={{ width: "600px"}}>
          <Card className="mb-4" style={{ height: "600px" }}>
            <Card.Body>
              <Card.Title className="font-weight-light">
                Why Web Design and User Experience?
              </Card.Title>
              <Card.Text>
                With the rise of digital technology, businesses need to provide customers with engaging and intuitive experiences. This course
                will provide you with the knowledge and skills to create visually appealing websites and interfaces that are easy to use and
                navigate. You will learn the concepts and tools used by professional web designers and user experience practitioners to create
                effective designs that meet user needs and business goals.
              </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src={myImg2} style={{ width: "574px", height: "300px"}} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;

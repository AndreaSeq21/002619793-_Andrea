import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Card, Row, Col } from 'react-bootstrap';
import myImg from '../images/profilePicture.jpeg';

const About = () => {
  return (
    <div >
      <Navbar />
      <div className="card bg-info text-white my-5 py-4 text-center" style={{ width: "80%", margin: "0 auto" }}>
        <div className="card-body">
          <h5 className="card-title" style={{ color: "black"}} >About me</h5>
          <img src={myImg} width="300" height="350"></img>
          
          <p className="card-text" style={{ color: "black"}}>
          Hi, my name is Andrea Joyce Sequeira. I have completed my B.E in Computer Engineering from University of Mumbai in the year 2019. I am an software engineer with 3 years of experience in the tech industry during which I have deepened my grasp of several programming languages, tools, and software development techniques. I've worked on numerous integration projects as a MuleSoft developer in the energy, retail, and finance industries. I am skilled at using the API-led architecture and MuleSoft's Anypoint Platform and Studio to create and maintain APIs. Due to my work, I've developed knowledge in service-oriented architecture, MuleSoft's Anypoint Platform, and related technologies like SOAP and REST. At Northeastern University, where I am pursuing a Master's in Information Systems with a concentration in Application Development, I am learning the importance of applying traditional strategies to modern-day projects.          </p>
        </div>
      </div>

      <Row xs={1} md={2} className="g-4 mx-5">
        <Col>
          <Card className="bg-primary text-white" style={{ height: '180px' }}>
            <Card.Body>
              <Card.Title className="text-center">Application Engineering Development</Card.Title>
              <Card.Text>
                Takes students in a step-by-step manner through the process of systematically combining UX techniques, business processes, and complex data models to assemble applications that are user-friendly and meet business requirements. Employs the object-oriented paradigm, visual user experience, and system design principles to put together complicated, powerful, real-world applications. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-primary text-white" style={{ height: '180px' }}>
            <Card.Body>
              <Card.Title className="text-center">Database Management and Database Design</Card.Title>
              <Card.Text>
                Database Design is a collection of processes that facilitate the designing, development, implementation and maintenance of enterprise data management systems. Properly designed database are easy to maintain, improves data consistency and are cost effective in terms of disk storage space. The database designer decides how the data elements correlate and what data must be stored.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-primary text-white" style={{ height: '180px' }}>
            <Card.Body>
              <Card.Title className="text-center">Web Design and User Experience Engineering</Card.Title>
              <Card.Text>
              Exposes students to both conceptual and technical aspects of Web design. User experience design is the discipline of creating a useful and usable website or application that is easily navigated and meets the needs of both the site owner and its users. Covers Web standards and best practices.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-primary text-white" style={{ height: '180px' }}>
            <Card.Body>
              <Card.Title className="text-center">Data Science Engineering Tools and Methods</Card.Title>
              <Card.Text>
                This Data Science with Python program provides learners with a complete understanding of data analytics tools & techniques. Getting started with Python can help you gain knowledge on data analysis, visualization, NumPy, SciPy, web scraping, and natural language processing.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default About;

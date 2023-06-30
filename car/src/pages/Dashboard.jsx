import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Profile from "./components/Profile";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Row className="m-0">
        <Col sm={12} md={2} className="left">
          <div className="box d-flex flex-column align-items-center justify-content-between h-100 py-5">
            <div className="top d-flex flex-column  justify-content-between">
              <h1>YellowGO</h1>
              <ul>
                <li>Dashboard</li>
                <li>Assets</li>
                <LinkContainer to='/add'><li>Add a car</li></LinkContainer>
              </ul>
            </div>
            <div className="bottom d-flex flex-column">
              <Button className="settings">Settings</Button>
              <LinkContainer to="/"><Button className="logOut">Log Out</Button></LinkContainer>
            </div>
          </div>
        </Col>
        <Col
          sm={12}
          md={10}
          className="right d-flex flex-column justify-content-center"
        >
          <div className="box py-5">
            <div className="header d-flex justify-content-between">
              <div className="left">
                <input type="text" />
              </div>
              <div className="right d-flex justify-content-between">
               <LinkContainer to='/add'><Button>Add a car</Button></LinkContainer>
                <div className="notice">
                  <i className="fa-regular fa-bell"></i>
                </div>
                <div className="profile">
                    <Profile/>
                </div>
              </div>
            </div>
            <div className="main">
              <div className="top">
                <div className="text">
                  <h1>Welcome Back, John</h1>
                  <p>Here's what happening with your store today.</p>
                </div>
                <Row>
                  <Col sm={12} md={6}>
                    <div className="image">
                      <div className="txt">
                        <h3>2022 Tesla Model S</h3>
                      </div>
                      <img
                        src="https://cdn.motor1.com/images/mgl/eo600N/s1/2023-tesla-model-s-ultra-red-color.webp"
                        alt=""
                      />
                    </div>
                  </Col>
                  <Col sm={12} md={6}>
                    <div className="card">
                      <Row>
                        <Col col={6}>
                          <div className="txt">
                            <h3>Range 25%</h3>
                            <p>market avarage is $16.999</p>
                          </div>
                        </Col>
                        <Col col={6}>
                          <div className="img">
                            <img
                              src="https://images.prismic.io/carwow/08f147de-7f42-4ee4-b40f-b301dbf0c9dc_2022+Tesla+Model+S+Alloys.jpg?fit=clip&q=60&w=750&cs=tinysrgb&auto=format"
                              alt=""
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className="card">
                      <Row>
                        <Col col={6}>
                          <div className="txt">
                            <h3>Range 25%</h3>
                            <p>market avarage is $16.999</p>
                          </div>
                        </Col>
                        <Col col={6}>
                          <div className="img">
                            <img
                              src="https://images.prismic.io/carwow/08f147de-7f42-4ee4-b40f-b301dbf0c9dc_2022+Tesla+Model+S+Alloys.jpg?fit=clip&q=60&w=750&cs=tinysrgb&auto=format"
                              alt=""
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="bottom">
                <div className="text">
                  <h1>Trending Cars</h1>
                </div>
                <Row>
                  <Col sm={12} md={4}>
                    <Card>
                      <Card.Img variant="top" src="https://www.cnet.com/a/img/resize/d430ad63c6329595835ad41873855b0c6d23914c/hub/2020/11/10/941b62b0-1c0e-48b0-b2e5-ca333cb37c47/ogi1-2021-hyundai-elantra-n-line-025.jpg?auto=webp&fit=crop&height=900&width=1200" />
                      <Card.Body>
                        <Card.Title>Hyundai Elentra 2022</Card.Title>
                        <Card.Text>
                          Sedan
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={12} md={4}>
                    <Card>
                      <Card.Img variant="top" src="https://www.cnet.com/a/img/resize/d430ad63c6329595835ad41873855b0c6d23914c/hub/2020/11/10/941b62b0-1c0e-48b0-b2e5-ca333cb37c47/ogi1-2021-hyundai-elantra-n-line-025.jpg?auto=webp&fit=crop&height=900&width=1200" />
                      <Card.Body>
                        <Card.Title>Hyundai Elentra 2022</Card.Title>
                        <Card.Text>
                          Sedan
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={12} md={4}>
                    <Card>
                      <Card.Img variant="top" src="https://www.cnet.com/a/img/resize/d430ad63c6329595835ad41873855b0c6d23914c/hub/2020/11/10/941b62b0-1c0e-48b0-b2e5-ca333cb37c47/ogi1-2021-hyundai-elantra-n-line-025.jpg?auto=webp&fit=crop&height=900&width=1200" />
                      <Card.Body>
                        <Card.Title>Hyundai Elentra 2022</Card.Title>
                        <Card.Text>
                          Sedan
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import Search from "./common/Search";
import Sidebar from "./common/Sidebar";
import StickyMenu from "./common/StickyMenu";
import MobileMenu from "./common/MobileMenu";
import { Styles } from "./styles/headerTwo.js";

class HeaderTwo extends Component {
  render() {
    return (
      <Styles>
        {/* Topbar 2 */}
        <section className="top-bar2">
          <Container>
            <Row>
              <Col lg="7" md="9">
                <div className="bar-left">
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                      <i className="las la-phone"></i>(470) 274 1040
                    </li>
                    <li className="list-inline-item">
                      <i className="las la-map-marker"></i>6041 Mableton pkwy SW Ste 146, Mableton, GA.
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg="5" md="3">
                <div className="bar-right d-flex justify-content-end">
                  <ul className="list-unstyled list-inline bar-social">
                    <li className="list-inline-item">
                      <a href={process.env.PUBLIC_URL + "/"}>
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href={process.env.PUBLIC_URL + "/"}>
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href={process.env.PUBLIC_URL + "/"}>
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href={process.env.PUBLIC_URL + "/"}>
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>

                  <ul className="list-unstyled list-inline sidebar-button">
                    <li className="list-inline-item nav-item side-box">
                      <Sidebar />
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Logo Area 2 */}
        <section className="logo-area2">
          <Container>
            <Row>
              <Col md="3">
                <div className="logo">
                  <Link to={process.env.PUBLIC_URL + "/"}>
                    <img
                      src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
                      alt=""
                    />
                  </Link>
                </div>
              </Col>
              <Col md="9">
                <div className="menu-box d-flex justify-content-end">
                  <ul className="nav menu-nav">
                    <li className="nav-item dropdown active">
                      <Link
                        className="nav-link dropdown-toggle"
                        to={process.env.PUBLIC_URL + "/"}
                        data-toggle="dropdown"
                      >
                        Inicio
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to={process.env.PUBLIC_URL + "/course-list"}
                        data-toggle="dropdown"
                      >
                        Cursos
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to={process.env.PUBLIC_URL + "/products"}
                        data-toggle="dropdown"
                      >
                        Productos
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to={process.env.PUBLIC_URL + "/about"}
                        data-toggle="dropdown"
                      >
                        Nosotros
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to={process.env.PUBLIC_URL + "/contact"}
                        data-toggle="dropdown"
                      >
                        Contacto
                      </Link>
                    </li>
                  </ul>
                  <div className="apply-btn">
                    <Link to={process.env.PUBLIC_URL + "/registration"}>
                      <i className="las la-clipboard-list"></i>Apply Now
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Sticky Menu */}
        <StickyMenu />

        {/* Mobile Menu */}
        <MobileMenu />
      </Styles>
    );
  }
}

export default HeaderTwo;

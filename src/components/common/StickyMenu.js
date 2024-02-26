import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Styles } from "./styles/stickyMenu.js";

function StickyMenu() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const stickyMenu = document.querySelector(".sticky-menu");

      if (window.scrollY > 160) {
        stickyMenu.classList.add("sticky");
      } else {
        stickyMenu.classList.remove("sticky");
      }
    });
  });

  return (
    <Styles>
      {/* Sticky Menu */}
      <section className="sticky-menu">
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
                    <i className="las la-clipboard-list"></i>Contacto
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Styles>
  );
}

export default StickyMenu;

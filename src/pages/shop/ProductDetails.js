import React, { Component } from "react";
import Datas from "../../data/shop/details.json";
import Product from "../../data/shop/product.json";
import { Link } from "react-router-dom";
import { Container, Row, Col, Tab, Nav, Table } from "react-bootstrap";
import HeaderTwo from "../../components/HeaderTwo";
import { BreadcrumbBox } from "../../components/common/Breadcrumb";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Quantity from "./components/Quantity";
import ReviewForm from "./../courses/components/ReviewForm";
import FooterTwo from "../../components/FooterTwo";
import { Styles } from "./styles/productDetails.js";


class ProductDetails extends Component {
  render() {
    const settings = {
      showArrows: false,
      showStatus: false,
      showIndicators: false,
    };

    const { match } = this.props;
    const id = match.params.id;

    const product = Product?.find((item) => item.id === id) || Product[0];

    return (
      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper product-details-page">
          {/* Header 2 */}
          <HeaderTwo />

          {/* Breadcroumb */}
          <BreadcrumbBox title="Detalles" />

          {/* Product Details */}
          <section className="product-details-area">
            <Container>
              <Row>
                <Col md="5">
                  <div className="product-slider">
                    <Carousel {...settings}>
                      {product.productImgs.map((data, i) => (
                        <div className="slider-item" key={i}>
                          <img
                            src={`/assets/images/products/${data}`}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </Col>

                <Col md="7">
                  <div className="product-information">
                    <div className="product-title">
                      <h4>{product?.productTitle}</h4>
                    </div>
                    <div className="product-rating d-flex">
                      <ul className="rating list-unstyled list-inline">
                        <li className="list-inline-item">
                          <i className="las la-star"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="las la-star"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="las la-star"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="las la-star"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="las la-star-half-alt"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="product-price d-flex">
                      <p className="dc-price">${product?.price}</p>
                      <p className="ac-price">${product?.previousPrice}</p>
                    </div>
                    <div className="product-desc">
                      <h5>Instalacion Incluida</h5>
                      <p>{product?.details}</p>
                    </div>

                    <div className="product-cart-wh-com-btn">
                        <h5>¿Té interesa?</h5>
                      <Link
                        to="/contact"
                        className="cart-btn mt-10"
                      >
                        ¡Contactanos!
                      </Link>

                      <span>(470) 274 1040</span>
                    </div>
                  </div>
                </Col>

                <Col md="12">
                  <div className="product-tab">
                    <Tab.Container defaultActiveKey="especificaciones">
                      <Nav className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="especificaciones">
                            Especificaciones
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="mediciones">Mediciones</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="garantia">Garantía</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="legal">Aviso legal</Nav.Link>
                        </Nav.Item>
                      </Nav>

                      <Tab.Content>
                        <Tab.Pane
                          eventKey="especificaciones"
                          className="description-tab prueba99"
                        >
                          <div className="ml20">
                            {product.specifications.map((data, i) => (
                              <ul>
                                <li key={i}>{data}</li>
                              </ul>
                            ))}
                          </div>
                        </Tab.Pane>

                        <Tab.Pane
                          eventKey="mediciones"
                          className="additional-tab prueba99"
                        >
                          <div className="mt10">
                            {product.measurements.map((data, i) => (
                              <ul>
                                <li key={i}>{data}</li>
                              </ul>
                            ))}
                          </div>
                        </Tab.Pane>

                        <Tab.Pane eventKey="garantia" className="review-tab prueba99">
                        <div className="mt10">
                            {product.warranty.map((data, i) => (
                              <ul>
                                <li key={i}>{data}</li>
                              </ul>
                            ))}
                          </div>
                        </Tab.Pane>

                        <Tab.Pane eventKey="legal" className="description-tab prueba99">
                        <div className="mt100">
                            {product.disclaimer.map((data, i) => (
                              <ul>
                                <li key={i}>{data}</li>
                              </ul>
                            ))}
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* Footer 2 */}
          <FooterTwo />
        </div>
      </Styles>
    );
  }
}

export default ProductDetails;

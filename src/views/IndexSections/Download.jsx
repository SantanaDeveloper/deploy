
import React from "react";

// reactstrap components
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";

class Download extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">
                Um pouco de nossas ferramentas{" "}
                  <span className="text-success">
                    Buscamos as melhores para fornecer o melhor <span role="img" aria-label="Pessoa Feliz">😀</span>
                  </span>
                </h2>
                <div className="text-center">
                  <h5 className="display-5 mb-5 mt-5">
                  Utilizamos em nossos projetos
                  </h5>
                  <Row className="justify-content-center">
                    <Col lg="2" xs="4">
                      <a
                        href="https://getbootstrap.com/"
                        id="tooltip255035741"
                        target="_blank"  rel="noopener noreferrer"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip255035741">
                        Bootstrap 4 - Biblioteca de componentes front-end mais popular
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://vuejs.org/"
                        id="tooltip265846671"
                        target="_blank"  rel="noopener noreferrer"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip265846671">
                        Vue.js - O Framework javascript progressivo
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://angularjs.org"
                        id="tooltip233150499"
                        target="_blank"  rel="noopener noreferrer"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip233150499">
                        Framework Angular
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://pt-br.reactjs.org/"
                        id="tooltip308866163"
                        target="_blank"  rel="noopener noreferrer"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip308866163">
                        React - Uma biblioteca JavaScript para criar interfaces de usuário
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.sketch.com/"
                        id="tooltip76119384"
                        target="_blank"  rel="noopener noreferrer"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip76119384">
                        Sketch - Kit de ferramentas de design digital
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.adobe.com/br/products/photoshop.html"
                        id="tooltip646643508"
                        target="_blank"  rel="noopener noreferrer"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip646643508">
                        Adobe Photoshop - Software para manipulação de imagens digitais
                      </UncontrolledTooltip>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Download;
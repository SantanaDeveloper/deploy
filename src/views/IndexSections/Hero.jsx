import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import Scrollchor from 'react-scrollchor';

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative" id="topo">
          {/* Hero for FREE version */}
          <section className="section section-lg section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-primary">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <img
                      alt="Logotipo Agência Santana"
                      className="img-fluid"
                      src={require("assets/img/brand/hero-agencia.webp")}
                      style={{ width: "200px" }}
                    />
                    <p className="lead text-white">
                    Com a Agência Santana Você Cria Seu Site, Loja Virtual Ou Arte Gráfica com quem sabe fazer garantindo os melhores resultados.
                    </p>
                    <div className="btn-wrapper mt5">
                      <Scrollchor to="#contato" animate={{offset: -25, duration: 1000}} >
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0"
                        color="default"
                        size="lg"
                      >
                      
                        <span className="btn-inner--icon mr-1">
                          <i className="ni ni-cloud-download-95" />
                        </span>
                        <span className="btn-inner--text">Entre em Contato</span>
                      </Button>{" "}
                      </Scrollchor>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;

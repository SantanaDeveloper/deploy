import React from "react";
// nodejs library that concatenates classes

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

class NossosServicos extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg bg-gradient-default">
          <Container className="pt-lg pb-500">
            <Row className="text-center justify-content-center">
              <Col lg="10">
                <h2 className="display-3 text-white">
                  Alguns De Nossos Serviços
                </h2>
                <p className="lead text-white">
                  Na Agência Santana, você conta o que precisa e cuidamos do
                  resto para você!
                </p>
              </Col>
            </Row>
            <Row className="row-grid mt-5 text-center justify-content-center">
              <Col lg="4">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  {/* <i className="ni ni-settings text-primary" /> */}
                  <img
                    alt="Sites Responsivos"
                    className="img-fluid"
                    src={require("assets/img/icons/common/responsive-design.svg")}
                  />
                </div>
                <h5 className="text-white mt-3">Sites Responsivos</h5>
                <p className="text-white mt-3">
                  Os sites responsivos permitem que que as páginas da web sejam
                  exibidas da melhor forma em uma variedade de dispositivos e
                  tamanhos de janelas ou telas.
                </p>
                <Button
                  color="secondary"
                  size="sm"
                  type="button"
                  to="/criacao-de-sites"
                  tag={Link}
                >
                  Saiba Mais
                </Button>
                <hr />
              </Col>
              <Col lg="4">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  {/* <i class="fas fa-dumpster-fire"></i> */}
                  <img
                    alt="Consultoria SEO"
                    className="img-fluid"
                    src={require("assets/img/icons/common/seo.svg")}
                  />
                </div>
                <h5 className="text-white mt-3">Consultoria SEO</h5>
                <p className="text-white mt-3">
                  Otimização do seu site para aparecer nas primeiras posições
                  dos motores de busca.
                  <br />
                  <br />
                  <br />
                </p>
                <Button
                  color="secondary"
                  size="sm"
                  type="button"
                  to="#"
                  tag={Link}
                >
                  Saiba Mais
                </Button>
                <hr />
              </Col>
              <Col lg="4">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  {/* <i className="ni ni-atom text-primary" /> */}
                  <img
                    alt="Consultoria SEO"
                    className="img-fluid"
                    src={require("assets/img/icons/common/uxui.svg")}
                  />
                </div>
                <h5 className="text-white mt-3">UX/UI Design</h5>
                <p className="text-white mt-3">
                  Design de interface com foco na experiência do usuário.
                  <br />
                  <br />
                  <br />
                </p>
                <Button
                  color="secondary"
                  size="sm"
                  type="button"
                  to="#"
                  tag={Link}
                >
                  Saiba Mais
                </Button>
                <hr />
              </Col>
            </Row>
            <Row className="row-grid mt-5 text-center justify-content-center">
              <Col lg="4">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-settings text-primary" />
                </div>
                <h5 className="text-white mt-3">LOJAS VIRTUAIS</h5>
                <p className="text-white mt-3">
                  Dê aos seus clientes a melhor experiência de compra, com
                  nossas soluções de e-commerce, adaptadas às suas necessidades.
                </p>
                <Button
                  color="secondary"
                  size="sm"
                  type="button"
                  to="#"
                  tag={Link}
                >
                  Saiba Mais
                </Button>
                <hr />
              </Col>
              <Col lg="4">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-ruler-pencil text-primary" />
                </div>
                <h5 className="text-white mt-3">Marketing Digital</h5>
                <p className="text-white mt-3">
                  Melhore seu alcance e ganhe mais clientes com nossas soluções
                  de marketing estratégicas.<br /><br />
                </p>
                <Button
                  color="secondary"
                  size="sm"
                  type="button"
                  to="#"
                  tag={Link}
                >
                  Saiba Mais
                </Button>
                <hr />
              </Col>
              <Col lg="4">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-atom text-primary" />
                </div>
                <h5 className="text-white mt-3">Artes Gráficas</h5>
                <p className="text-white mt-3">
                  Criação de Artes Gráficas e toda a identidade visual.
                  Possuímos várias soluções de design para o seu negócio se
                  destacar.
                </p>
                <Button
                  color="secondary"
                  size="sm"
                  type="button"
                  to="#"
                  tag={Link}
                >
                  Saiba Mais
                </Button>
                <hr />
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default NossosServicos;

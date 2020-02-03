import React from "react";

// reactstrap components
import { Badge, Button, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";

// index page sections
import Download from "../IndexSections/Download.jsx";

class Sites extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main" id="topo">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-primary">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Criação de sites profissionais e responsivos{" "}
                        <span>Se Destaque na Web</span>
                      </h1>
                      <p className="lead text-white">
                        Desenvolvemos sites exclusivos que atendem seus
                        objetivos e necessidades. Apresente sua empresa,
                        produtos e serviços na web e aumente o número de
                        clientes e vendas. Nós temos a solução ideal!
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="primary"
                          href="#"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-chat-round" />
                          </span>
                          <span className="btn-inner--text">
                            Tenho Interesse
                          </span>
                        </Button>
                        <Button
                          className="btn-icon mb-3 mb-sm-0 ml-1"
                          color="primary"
                          href="#"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-folder-17" />
                          </span>
                          <span className="btn-inner--text">Ver Portfólio</span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <div className="pl-md-5">
                    <h3>Sobre o Serviço</h3>
                    <p className="lead">
                      A Criação de Sites é a arte moderna especialista em elevar
                      o profissionalismo do seu negócio e destacá-lo da
                      concorrência.
                    </p>
                    <p>
                      Muito além de um cartão de visitas, o website promove o
                      reconhecimento e autoridade da marca, atraindo mais
                      clientes potenciais para vender mais.
                    </p>
                    <p>
                      Porém, não adianta criar qualquer site: invista na criação
                      de sites que dão resultado!
                    </p>
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Converse com a equipe sobre a criação de sites.
                    </a>
                  </div>
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-2">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>Alguns Recursos de Nossos Sites</h3>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Carefully crafted components
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Amazing page examples</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Super friendly support team
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <Download />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Sites;

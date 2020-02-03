import React from "react";
// nodejs library that concatenates classes

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Container,
  Row,
  Col
} from "reactstrap";

class Recursos extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg pt-lg-0 mt--100">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid">
                  <Col lg="3">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                          <i className="ni ni-chat-round" />
                        </div>
                        <h6 className="text-primary text-uppercase">
                          Entrevista
                        </h6>
                        <p className="description mt-3">
                          No primeiro contato anotamos o objetivo do seu negocio
                          e indicamos as soluções ideais para atingir o melhor
                          resultado.
                        </p>
                        <div>
                          <Badge color="primary" pill className="mr-1">
                            Design
                          </Badge>
                          <Badge color="primary" pill className="mr-1">
                            Funções
                          </Badge>
                          <Badge color="primary" pill className="mr-1">
                            Integrações
                          </Badge>
                        </div>
                        <Button
                          className="mt-4"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Entre em contato
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="3">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                          <i className="ni ni-collection" />
                        </div>
                        <h6 className="text-warning text-uppercase">
                          Propostas
                        </h6>
                        <p className="description mt-3">
                          Depois que as soluções forem escolhidas, realizamos o
                          orçamento e calculamos o tempo necessário ate o
                          projeto ficar pronto.
                        </p>
                        <div>
                          <Badge color="warning" pill className="mr-1">
                            Prazo
                          </Badge>
                          <Badge color="warning" pill className="mr-1">
                            Valor
                          </Badge>
                          <Badge color="warning" pill className="mr-1">
                            Manutenções
                          </Badge>
                        </div>
                        <Button
                          className="mt-4"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Entre em contato
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="3">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-info rounded-circle mb-4">
                          <i className="ni ni-spaceship" />
                        </div>
                        <h6 className="text-info text-uppercase">
                          Desenvolvimento
                        </h6>
                        <p className="description mt-3">
                          Começamos assim que o contrato for fechado, a partir
                          deste momento nossa equipe trabalha para entregar o
                          melhor resultado.
                        </p>
                        <div>
                          <Badge color="info" pill className="mr-1">
                            Front-end
                          </Badge>
                          <Badge color="info" pill className="mr-1">
                            Back-end
                          </Badge>
                          <Badge color="info" pill className="mr-1">
                            SEO
                          </Badge>
                        </div>
                        <Button
                          className="mt-4"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Entre em contato
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="3">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                          <i className="ni ni-satisfied" />
                        </div>
                        <h6 className="text-success text-uppercase">
                          Avaliação do Cliente
                        </h6>
                        <p className="description mt-3">
                          O Trabalho só é encerrado após o cliente verificar que
                          tudo está do jeito que desejava, caso não precise de
                          alterações finalizamos.
                        </p>
                        <div>
                          <Badge color="success" pill className="mr-1">
                            Qualidade
                          </Badge>
                          <Badge color="success" pill className="mr-1">
                            Lucros
                          </Badge>
                          <Badge color="success" pill className="mr-1">
                            Visitas
                          </Badge>
                        </div>
                        <Button
                          className="mt-4"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Entre em contato
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid align-items-center">
              <Col className="order-md-2" md="6">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={require("assets/img/theme/promo-1.png")}
                />
              </Col>
              <Col className="order-md-1" md="6">
                <div className="pr-md-1">
                  <div className="icon icon-lg icon-shape icon-shape-danger shadow rounded-circle mb-1">
                    <i className="ni ni-favourite-28" />
                  </div>
                  <h3>Paixão Pelo Trabalho</h3>
                  <p>
                    A nossa realização profissional esta em cada trabalho que
                    entregamos com paixão.
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="success">
                            <i className="ni ni-settings-gear-65" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">
                            Componentes cuidadosamente criados
                          </h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="success">
                            <i className="ni ni-html5" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">
                            Páginas incríveis e semânticas
                          </h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="success">
                            <i className="ni ni-satisfied" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">
                            Equipe de suporte super amigável
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
        <section className="section bg-secondary">
          <Container>
            <Row className="row-grid align-items-center">
              <Col md="6">
                <Card className="bg-default shadow border-0">
                  <CardImg
                    alt="Novos Clientes"
                    src={require("assets/img/ill/clientes.webp")}
                    top
                  />
                  <blockquote className="card-blockquote">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-bg"
                      preserveAspectRatio="none"
                      viewBox="0 0 583 95"
                    >
                      <polygon
                        className="fill-default"
                        points="0,52 583,95 0,95"
                      />
                      <polygon
                        className="fill-default"
                        opacity=".2"
                        points="0,42 583,95 683,0 0,95"
                      />
                    </svg>
                    <h4 className="display-3 font-weight-bold text-white">
                    Negócio Online
                    </h4>
                    <p className="lead text-italic text-white">
                    Como a sua empresa trabalha para conquistar novos clientes? Podemos aumentar a visibilidade de sua empresa e atrair mais clientes.
                    </p>
                  </blockquote>
                </Card>
              </Col>
              <Col md="6">
                <div className="pl-md-5">
                  <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle mb-5">
                    <i className="ni ni-chart-bar-32" />
                  </div>
                  <h3>Gere mais resultados</h3>
                  <p className="lead">
                    Se a sua empresa só faz investimentos em marketing offline,
                    está na hora de acompanhar as tendências e estar presente na
                    internet. O mundo digital apresenta diversas oportunidades.
                  </p>
                  <p>
                    Com a expansão do acesso à internet, o mundo está cada vez
                    mais conectado e sua utilização no dia a dia só aumenta.
                    Usamos nossos celulares e outros dispositivos móveis para
                    executar diversas tarefas, desde ações simples, como a
                    navegação pelas redes sociais, até as transações bancárias
                    por meio de aplicativos.
                  </p>
                  <p>
                    Com isso, uma empresa que deseja alcançar uma posição de
                    destaque no mercado, se tornando uma referência e ganhando
                    credibilidade, precisa estar presente na internet. Criar um
                    site ajuda a atrair mais consumidores e aumentar o
                    conhecimento da marca gerando mais lucros.
                  </p>
                  <a
                    className="font-weight-bold text-warning mt-5"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Quero falar com a Agência Santana e criar meu site!
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Recursos;

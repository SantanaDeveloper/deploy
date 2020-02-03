import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import Scrollchor from "react-scrollchor";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
          <Container>
            <Row className="row-grid align-items-center my-md">
              <Col lg="6">
                <h3 className="text-primary font-weight-light mb-2">
                  Agradecemos a Sua Visita
                </h3>
                <h4 className="mb-0 font-weight-light">
                  Conheça nosso atendimento ao cliente por redes sociais
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  className="btn-neutral btn-icon-only btn-round ml-1"
                  color="facebook"
                  href="https://www.facebook.com/agenciasantanaofc"
                  id="tooltip837440414"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook-square" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Curta a página no Facebook
                </UncontrolledTooltip>

                <Button
                  className="btn-neutral btn-icon-only btn-round"
                  color="instagram"
                  href="https://www.instagram.com/agenciasantanaoficial"
                  id="tooltip475038074"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-instagram" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Siga-nos no Instagram
                </UncontrolledTooltip>

                <Button
                  color="success"
                  className="btn-neutral btn-icon-only btn-round ml-1"
                  href="https://wa.me/553291554521?text=Ol%C3%A1%2C%20gostaria%20de%20ser%20atendido%20pela%20Ag%C3%AAncia%20Santana."
                  id="tooltip829810202"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-whatsapp" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Converse no Whatsapp
                </UncontrolledTooltip>
              </Col>
            </Row>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                 
                    Agência Santana
                </div>
              </Col>
              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Política de privacidade
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Termos de uso
                    </NavLink>
                  </NavItem>
                  <Scrollchor
                    to="#topo"
                    animate={{ offset: -25, duration: 1000 }}
                  >
                    <Button style={{position: "relative", bottom: 0, right: 0}}
                      className="btn-icon btn-2"
                      color="info"
                      type="button"
                    >
                      <span className="btn-inner--icon">
                        <i className="ni ni-bold-up" />
                      </span>
                    </Button>
                  </Scrollchor>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;

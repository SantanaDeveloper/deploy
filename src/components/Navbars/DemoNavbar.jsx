import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu, 
  // DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  render() {
    return (
      <> 
        <header className="header-global"> 
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand  className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="Logotipo Agência Santana"
                  src={require("assets/img/brand/agencia-santana-white.svg")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar_global">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="Logotipo Agência Santana"
                          src={require("assets/img/brand/agencia-santana.webp")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-settings d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Serviços</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <Media
                          className="d-flex align-items-center"
                          to="/criacao-de-sites" tag={Link}
                        >
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="ni ni-spaceship" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              Criação de Sites
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              Criação de Sites Profissionais, Lojas Virtuais,
                              Blogs e etc. Todos nossos sistemas são responsivos
                              e seguros.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="#"
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-palette" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              Artes Gráficas
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              Criação de Artes Gráficas e toda a identidade
                              visual. Possuímos várias soluções de design para o
                              seu negócio se destacar.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="#"
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-ui-04" />
                          </div>
                          <Media body className="ml-3">
                            <h5 className="heading text-warning mb-md-1">
                              Lista Completa
                            </h5>
                            <p className="description d-none d-md-inline-block mb-0">
                              Conheça a lista completa de nossos serviços.
                            </p>
                          </Media>
                        </Media>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <NavLink to="#" tag={Link}>
                      <i className="ni ni-folder-17 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Portfólio</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="#" tag={Link}>
                    <i class="fa fa-phone d-lg-none mr-1"></i>
                      <span className="nav-link-inner--text">Fale Conosco</span>
                    </NavLink>
                  </NavItem>
                  {/* <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Examples</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/landing-page" tag={Link}>
                        Landing
                      </DropdownItem>
                      <DropdownItem to="/profile-page" tag={Link}>
                        Profile
                      </DropdownItem>
                      <DropdownItem to="/login-page" tag={Link}>
                        Login
                      </DropdownItem>
                      <DropdownItem to="/register-page" tag={Link}>
                        Register
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown> */}
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.facebook.com/agenciasantanaofc"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                    Curta a página no Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.instagram.com/agenciasantanaoficial"
                      id="tooltip356693867"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                      Siga-nos no Instagram
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://wa.me/553291554521?text=Ol%C3%A1%2C%20gostaria%20de%20ser%20atendido%20pela%20Ag%C3%AAncia%20Santana."
                      id="tooltip184698705"
                      target="_blank"
                    >
                      <i className="fa fa-whatsapp" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Whatsapp
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                      Fale no Whatsapp
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      to="/login-page" tag={Link}
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-user-circle mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">
                      Área do Cliente
                      </span>
                    </Button>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;

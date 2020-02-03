import React from 'react';
import axios from 'axios';

// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

class Contato extends React.Component{
  
  constructor(props) {
	super(props);
	this.state = {
    nome: '',
    assunto: '',
  	email: '',
  	mensagem: ''
	}
  }

  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Deu certo.")
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Falho no envio.")
      }
    })
  }

  resetForm(){
    
     this.setState({nome:"" , assunto:"" , email: "", mensagem: ""})
  }
  
  render() {
	return(
    <>
    <section id="contato" className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--90">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Envie uma mensagem para a equipe</h4>
                      <p className="mt-0">
                      Seu projeto é muito importante para nós.
                      </p>
                      <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-circle-08" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            id="name" value={this.state.nome} onChange={this.onNomeChange.bind(this)} required
                            placeholder="Seu Nome"
                            type="text"
                            onFocus={e => this.setState({ nameFocused: true })}
                            onBlur={e => this.setState({ nameFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames("mt-1", {
                          focused: this.state.nameFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-notification-70" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            id="assunto" value={this.state.assunto} onChange={this.onAssuntoChange.bind(this)} required
                            placeholder="Assunto da mensagem"
                            type="text"
                            onFocus={e => this.setState({ assuntoFocused: true })}
                            onBlur={e => this.setState({ assuntoFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} required
                            placeholder="Seu melhor E-mail"
                            type="email"
                            onFocus={e => this.setState({ emailFocused: true })}
                            onBlur={e => this.setState({ emailFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                        id="mensagem" value={this.state.mensagem} onChange={this.onMensagemChange.bind(this)} required
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Escreva sua mensagem..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="submit"
                        >
                          Enviar Mensagem
                        </Button>
                      </div>
                      </form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
    </>
	);
  }

  onNomeChange(event) {
	this.setState({nome: event.target.value})
  }

  onAssuntoChange(event) {
    this.setState({assunto: event.target.value})
    }

  onEmailChange(event) {
	this.setState({email: event.target.value})
  }

  onMensagemChange(event) {
	this.setState({mensagem: event.target.value})
  }
}

export default Contato;
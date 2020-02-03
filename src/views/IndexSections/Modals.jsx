/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import {
  Button,
  Modal,
  Row,
  Col
} from "reactstrap";

class Modals extends React.Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  render() {
    return (
      <>
        <Row>
          
          <Col md="12">
            <Button
              block
              className="mb-3"
              color="warning"
              type="button"
              onClick={() => this.toggleModal("notificationModal")}
            >
              Notification
            </Button>
            <Modal
              className="modal-dialog-centered modal-success"
              contentClassName="bg-gradient-success"
              isOpen={this.state.notificationModal}
              toggle={() => this.toggleModal("notificationModal")}
            >
              <div className="modal-header">
                <h6 className="modal-title" id="modal-title-notification">
                  Mensagem enviada com sucesso!
                </h6>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("notificationModal")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="py-3 text-center">
                  <i className="ni ni-bell-55 ni-3x" />
                  <h4 className="heading mt-4">Recebemos o seu contato!</h4>
                  <p>
                  Em breve entraremos em contato! Agradecemos o interesse em nossos serviços.
                  </p>
                </div>
              </div>
              <div className="modal-footer">
                <Button className="btn-white" color="default" type="button"
                onClick={() => this.toggleModal("notificationModal")}
                >
                  Fechar
                </Button>
                
              </div>
            </Modal>
          </Col>
          
        </Row>
      </>
    );
  }
}

export default Modals;

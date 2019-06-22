import React from "react"
import PropTypes from "prop-types"
import Modal from 'react-modal';
import ReactDOM from 'react-dom';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

//Modal.setAppElement('#root')

class LoginMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f10';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render () {
    return (
      <React.Fragment>
        <div class='header_login_menu col s1'>
          <button class='btn-floating pulse blue lighten-4' onClick={this.openModal}>
            <img src='/login.png' width='28' height='28'></img>
          </button>

          <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
        </Modal>
        </div>
      </React.Fragment>
    );
  }
}

const click =(e)=> {
  // e.preventDefault();
  // console.log(e);
  alert('React Test!!');
}
//ReactDOM.render(<LoginMenu />, appElement);
export default LoginMenu;

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
    transform             : 'translate(-50%, -50%)',
    width                 : '75%'
  }
};

class SignUp extends React.Component {

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
    this.subtitle.style.color = '#616161';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render () {
    return (
      <React.Fragment>
        <div class='login_parts'>
          <button class='login_button' onClick={this.openModal}>登録する</button>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h5 ref={subtitle => this.subtitle = subtitle} class='modal_title'>新規登録</h5>
          <form>
            <label>名前</label>
            <input type='text' size='20' maxLength='20' />
            <label>電話番号</label>
            <input type='tel' size='11' maxLength='11' />
            <div class='login_parts'>
              <button class='login_button'>登録</button>
            </div>
          </form>
        </Modal>
      </React.Fragment>
    );
  }
}

export default SignUp

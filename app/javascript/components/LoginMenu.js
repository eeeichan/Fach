import React from "react"
import PropTypes from "prop-types"
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import axios from 'axios';


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
    this.subtitle.style.color = '#616161';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleChange() {
    const ok_button = document.getElementById('login_button_id');
    const ok_button_parts = document.getElementById('login_parts_id');
    ok_button.disabled = false;
    ok_button.classList.add('login_button');
    ok_button.classList.remove('login_button_disabled');
    ok_button_parts.classList.add('login_parts');
    ok_button_parts.classList.remove('login_parts_disabled');
  }

  handleOnClick(event) {

  }

  render () {
    return (
      <React.Fragment>
        <div class='header_login_menu col s1 m1'>
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
            <h5 ref={subtitle => this.subtitle = subtitle} class='modal_title'>ログイン</h5>
            <form role='form' accept-charset="UTF-8" action='/signin' method='post'>
              <div class='modal_tel'>
                <label>携帯電話番号</label>
                {/* <span>+81</span> */}
                <input name='private_users[tel]' type='tel' size='11' maxlength='11' id='modal_tel_input' placeholder='08012345678' onChange={this.handleChange}></input>
              </div>
              <input type="hidden" name="authenticity_token" value={this.props.csrf_token} ></input>
              <div id='login_parts_id' class='login_parts_disabled'>
                <button type='submit' id='login_button_id' class='login_button_disabled' disabled>続ける</button>
              </div>
            </form>
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

//ReactDOM.render(<LoginMenu />, appElement);
export default LoginMenu;

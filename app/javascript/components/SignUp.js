import React from "react"
import PropTypes from "prop-types"
import Modal from 'react-modal';
import ReactDOM from 'react-dom';

import { RadioGroup, RadioButton } from 'react-radio-buttons';

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

  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      selectedOption: "option1"
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

  radioChange(e) {
    this.setState({
      selectedOption: e.currentTarget.value
    });
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
          <form name='private_users' role='form' accept-charset="UTF-8" action='/signup' method='post'>
            <div id='modal_input_id' class='modal_input' >
              <label>携帯電話番号</label>
              <input name='private_users[tel]' type='tel' maxLength='11' placeholder='08012345678' />
            </div>
            <div class='birth_input'>
              <label>誕生日</label>
              <input type='date' name='private_users[birth]' />
            </div>
            <div class='sex_input'>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="private_users[sex]"
                    value="0"
                    checked={true}
                    className="form-check-input"
                  />
                  男
                </label>
              </div>

              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="private_users[sex]"
                    value="1"
                    className="form-check-input"
                  />
                  女
                </label>
              </div>
            </div>
            <div class='login_parts'>
              <button type='submit' id='login_button_id' class='login_button'>登録</button>
            </div>
          </form>
        </Modal>
      </React.Fragment>
    );
  }
}

export default SignUp

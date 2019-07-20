import React from "react"
import PropTypes from "prop-types"


class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      size: ''
    }
  }
  handleChange () {
    alert('test');
  }
  handleToProfilePage = () => {
    this.props.history.push('/apps')
  }

  render () {
    return (
      <React.Fragment>
        <div class='apps_header'>
          <button onClick={() => { this.handleToProfilePage(); }}>
            <i class="material-icons">account_circle</i>
          </button>
        </div>
        <div class="row">
          <div class="col s3"></div>
          <div class="col s6">
            <div class='profile_edit'>
              <form role='form' acceptCharset='UTF-8' action='/apps/edit' method='post'>
                <div class='name_input'>
                  <label>名前</label>
                  <input name='profile[nickname]' type='text' defaultValue={this.props.user_nickname} ></input>
                </div>
                <div class='job_input'>
                  <label>仕事</label>
                  <input name='profile[job]' type='text' defaultValue={this.props.user_job}></input>
                </div>
                <div class='personality_input'>
                  <label>性格</label>
                  クール  <input name='profile[personality]' type='range' step='1' min='0' max='5' defaultValue={this.props.user_personality}></input>  明るい
                </div>
                <div class='profile_input'>
                  <label>プロフィール</label>
                  <textarea name='profile[profile]' rows='10' cols='100' defaultValue={this.props.user_profile}></textarea>
                </div>
                <input type='hidden' name='authenticity_token' defaultValue={this.props.csrf_token} ></input>
                <div class='save_parts'>
                  <button type='submit' id='save_button_id' class='save_button'>保存</button>
                </div>
              </form>
            </div>
          </div>
          <div class="col s3"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Edit

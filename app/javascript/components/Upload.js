import React from "react"
import PropTypes from "prop-types"
import { Formik, Form, Field } from "formik";


class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 画像を表示するためにstateを作成します.
      imageData: "/profile_images/default.png"
    };
  }

  onFileChange(e) {
    const files = e.target.files
    if(files.length > 0) {
      var file = files[0]
      var reader = new FileReader()
      reader.onload = (e) => {
          this.setState({ imageData: e.target.result })
      };
      reader.readAsDataURL(file)
  } else {
    this.setState({ imageData: null })
  }
  }
  handleToProfilePage = () => {
    this.props.history.push('/apps')
  }

  render () {
    const imageData = this.state.imageData
    let preview = ''
    if(imageData != null) {
      preview = (
        <div class='upload_preview'>
          <img src={imageData}/>
        </div>
      )
    }
    return (
      <React.Fragment>
        <div class='apps_header'>
          <button onClick={() => { this.handleToProfilePage(); }}>
            <i class="material-icons">account_circle</i>
          </button>
        </div>
        <div class='row'>
          <div class='col s3'></div>
          <div class='col s6'>
            <div class='upload_form'>
              {/* プレビュー */}
              {preview}
              <form action='/apps/upload' method='post' enctype='multipart/form-data'>
                <label for='upload_button'>画像を選択する
                  <input id='upload_button' name='profile[photo]' type='file' onChange={ (e) => {this.onFileChange(e)}}></input>
                </label>
                <input type='hidden' name='authenticity_token' defaultValue={this.props.csrf_token} ></input>
                <div class='save_parts'>
                  <button type='submit' id='save_button_id' class='save_button'> アップロード</button>
                </div>
              </form>
            </div>
          </div>
          <div class='col s3'></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Upload

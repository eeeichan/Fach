import React from "react"
import PropTypes from "prop-types"
import { Formik, Form, Field } from "formik";


class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 画像を表示するためにstateを作成します.
      profileImage: ""
    };
  }

  // 後ほど記述
  createUser = payload => {};

  setImage = (e, setFieldValue) => {
    let files = e.target.files;
    let reader = new FileReader();
    // 画像をbase64にエンコードします.
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      // stateに画像を入れることで描写させます.
      this.setState({ profileImage: reader.result });
      // formikで送信できるようにsetFieldValue()を呼び出します.
      setFieldValue("profile_image", reader.result);
    };
  };



  render () {
    return (
      <React.Fragment>
        <div class='upload_form'>
          <form action='/apps/upload' method='post' enctype='multipart/form-data'>
            <label>プロフィール画像</label>
            <input name='profile[photo]' type='file'></input>
            <input type='hidden' name='authenticity_token' defaultValue={this.props.csrf_token} ></input>
            <button type='submit' name=''>アップロード</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Upload

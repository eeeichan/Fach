import React from "react"
import PropTypes from "prop-types"


class Edit extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div class='profile_edit'>
          <div class='paint_board'>
            <div class='name_input'>
              <label value=''>名前</label>
              <input type='text'></input>
            </div>
            <div class='birth_input'>
              <label value=''>誕生日</label>
              <input type='date'></input>
            </div>
            <div class='job_input'>
              <label value=''>仕事</label>
              <input type='text'></input>
            </div>
            <div class='personality_input'>
              <label type=''>性格</label>
              クール  <input type='range' step='1' min="0" max="5" ></input>  明るい
            </div>
            <label value=''>プロフィール</label>
            <div class='box11'>
              <textarea rows='10' cols='100'></textarea>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Edit

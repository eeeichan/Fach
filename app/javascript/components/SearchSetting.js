import React from "react"
import PropTypes from "prop-types"
import Select from 'react-select'

import InputRange from 'react-input-range';

import Search from "./Search";

import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';

const Range = Slider.Range;

const style = { width: 400, margin: 50 };

function log(value) {
  console.log(value); //eslint-disable-line
}

const region = [
  { label: '北海道', value: 1},
    {label: '青森県', value: 2},
    {label: '岩手県', value: 3},
    {label: '宮城県', value: 4},
    {label: '秋田県', value: 5},
    {label: '山形県', value: 6},
    {label: '福島県', value: 7},
    {label: '茨城県', value: 8},
    {label: '栃木県', value: 9},
    {label: '群馬県', value: 10},
    {label: '埼玉県', value: 11},
    {label: '千葉県', value: 12},
    {label: '東京都', value: 13},
    {label: '神奈川県', value: 14},
    {label: '新潟県', value: 15},
    {label: '富山県', value: 16},
    {label: '石川県', value: 17},
    {label: '福井県', value: 18},
    {label: '山梨県', value: 19},
    {label: '長野県', value: 20},
    {label: '岐阜県', value: 21},
    {label: '静岡県', value: 22},
    {label: '愛知県', value: 23},
    {label: '三重県', value: 24},
    {label: '滋賀県', value: 25},
    {label: '京都府', value: 26},
    {label: '大阪府', value: 27},
    {label: '兵庫県', value: 28},
    {label: '奈良県', value: 30},
    {label: '和歌山県', value: 31},
    {label: '鳥取県', value: 32},
    {label: '島根県', value: 33},
    {label: '岡山県', value: 34},
    {label: '広島県', value: 35},
    {label: '山口県', value: 36},
    {label: '徳島県', value: 37},
    {label: '香川県', value: 38},
    {label: '愛媛県', value: 39},
    {label: '高知県', value: 40},
    {label: '福岡県', value: 41},
    {label: '佐賀県', value: 42},
    {label: '長崎県', value: 43},
    {label: '熊本県', value: 44},
    {label: '大分県', value: 45},
    {label: '宮崎県', value: 46},
    {label: '鹿児島県', value: 47},
    {label: '沖縄県', value: 48}
]

// const createSliderWithTooltip = Slider.createSliderWithTooltip;
// const Range = Slider.Range;
// const Handle = Slider.Handle;
// const handle = (props) => {
//   const { value, dragging, index, ...restProps } = props;
//   return (
//     <Tooltip
//       prefixCls="rc-slider-tooltip"
//       overlay={value}
//       visible={dragging}
//       placement="top"
//       key={index}
//     >
//       <Handle value={value} {...restProps} />
//     </Tooltip>
//   );
// };

// const wrapperStyle = { width: 400, margin: 50 };

class SearchSetting extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      age1: '18',
      age2: '30',
      lowerBound: 20,
      upperBound: 40,
      value: [20, 40],
    }
  }

  handleRange = (e) => {
    this.setState({age1: e[0]});
    this.setState({age2: e[1]});
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
        <div class='row'>
          <div class='col s3'></div>
          <div class='col s6'>
            <form role='form' acceptCharset='UTF-8' action='/apps/edit' method='post'>
              <div class='search_region'>
                <label>地域</label>
                <Select
                  id={""}
                  name={""}
                  options={region}
                  placeholder={"検索地域"}
                  // onChange={this.handleChange}
                />
              </div>
              <div class='search_age'>
                <label>年齢</label>
                <p>{this.state.age1}歳 - {this.state.age2}歳</p>
                <div style={style}>
                  <Range allowCross={false} defaultValue={[18, 30]} min={18} max={60} onChange={(e) => {this.handleRange(e)}} />
                </div>
                {/* <div style={wrapperStyle}>
                <Range min={18} max={60} defaultValue={this.state.value} />
                </div> */}
                {/* <p>{this.state.age}</p>
                <input name='' type='range' step='1' min='18' max='60' onChange={(e) => {this.handleRange(e)}}></input> */}
              </div>
              <div class='search_face'>
                <label>好みの顔</label>
                <input />
              </div>

              <input type='hidden' name='authenticity_token' defaultValue={this.props.csrf_token} ></input>
              <div class='save_parts'>
                <button type='submit' id='save_button_id' class='save_button'>保存</button>
              </div>
            </form>
          </div>
          <div class='col s3'></div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchSetting

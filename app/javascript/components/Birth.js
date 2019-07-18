import React from "react"
import PropTypes from "prop-types"
import Select from 'react-select'


const adultCheckYear = () => {
  const dt = new Date();
  const nowYear = dt.getFullYear();
  const lastYear = Number(nowYear) - 18;
  return lastYear;
}
const yearItems = [];
for (let i = adultCheckYear(); i >= 1950; i--) {
  yearItems.push(
    { value: i, label: i},
  )
}
const monthItems = [];
for (let i = 1; i <= 12; i++) {
  monthItems.push(
    { value: i, label: i},
  )
}
var dayItems = [];
for (let i = 1; i <= 31; i++) {
  dayItems.push(
    { value: i, label: i},
  )
}


class Birth extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      year: '',
      month: '',
      dayset: '',
      day: dayItems,
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({year: e.value});
  }

  getMonthDays = (e) => {
    this.setState({month: e.value});
    const year = this.state.year;
    const month_tmp = e.value;

    var month = "";
    if (String(month_tmp).length == 1) {
      month = '0' + month_tmp;
    }else{
      month = month_tmp;
    }

    const lastDay = new Date(year, month + 1, 0).getDate();
    var dayItems = [];
    for (let i = 1; i <= Number(lastDay); i++) {
      dayItems.push(
        { value: i, label: i},
      )
    }
    this.setState({day: dayItems});
    return month_tmp;
  };

  checkAdult = (e) => {
    this.setState({dayset: e.value});
    return e.value;
  }

  monthCheck = (val) => {
    const year = this.state.year;
    const month = val;
    const day = this.state.dayset;
    const dt = new Date;
    dt.setFullYear(dt.getFullYear() - 18);
    const inputBirth = new Date(year, month - 1, day);
    if (dt.getTime() < inputBirth.getTime()) {
      this.setState({message: "18歳以下は登録できません"})
    }else {
      this.setState({message: ""})
    }
  }
  dayCheck = (val) => {
    const year = this.state.year;
    const month = this.state.month;
    const day = val;
    const dt = new Date;
    dt.setFullYear(dt.getFullYear() - 18);
    const inputBirth = new Date(year, month - 1, day);
    if (dt.getTime() < inputBirth.getTime()) {
      this.setState({message: "18歳以下は登録できません"})
    }else {
      this.setState({message: ""})
    }
  }

  myMonthFunc = (e) => {
    const monthReturnValue = this.getMonthDays(e);
    this.monthCheck(monthReturnValue);
  }
  myDayFunc = (e) => {
    const dayReturnValue = this.checkAdult(e);
    this.dayCheck(dayReturnValue);
  }

  render () {
    return (
      <React.Fragment>
        <div>
          <p>{this.state.message}</p>
          <label>誕生日</label>
            <Select
              id={"yearSelect"}
              name={"private_users[birth1]"}
              options={yearItems}
              placeholder={"年"}
              onChange={this.handleChange}
            />
            <Select
              id={"monthSelect"}
              name={"private_users[birth2]"}
              options={monthItems}
              placeholder={"月"}
              onChange={(e) => {
                this.myMonthFunc(e);
              }}
            />
            <Select
              id={"daySelect"}
              name={"private_users[birth3]"}
              options={this.state.day}
              placeholder={"日"}
              onChange={(e) => {
                this.myDayFunc(e);
              }}
            />
        </div>
      </React.Fragment>
    );
  }
}

export default Birth

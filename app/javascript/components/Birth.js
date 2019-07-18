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


// const Year = () => (
//   <Select id={"yearSelect"} name={"private_users[birth1]"} options={yearItems} placeholder={"年"} value={this.state.value}/>
// )
// const Month = () => (
//   <Select name={"private_users[birth2]"} options={monthItems} placeholder={"月"} />
// )
// const Day = () => (
//   <Select name={"private_users[birth3]"} options={dayItems} placeholder={"日"}/>
// )


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
    console.log("getMonthDays");
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
    const year = String(this.state.year);
    let month = String(this.state.month);
    const day = String(this.state.dayset);
    // if (month.length === 1) {
    //   month = '0' + month;
    // }
    // let day = String(e.value);
    // if (day.length === 1) {
    //   day = '0' + day;
    // }
    // console.log( year + month + day);
    const dt = new Date;
    dt.setFullYear(dt.getFullYear() - 18);
    const inputBirth = new Date(year, month - 1, day);
    if (dt.getTime() < inputBirth.getTime()) {
      this.setState({message: "18歳以下は登録できません"})
    }else {
      this.setState({message: ""})
    }
  }

  check = (val) => {
    console.log("check");
    console.log(this.state.year + '/' + this.state.month + '/' + this.state.dayset);
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

  myFunc = (e) => {
    const monthReturnValue = this.getMonthDays(e);
    this.check(monthReturnValue);
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
                this.myFunc(e);
                // this.getMonthDays(e);
                // this.check();
              }}
            />
            <Select
              id={"daySelect"}
              name={"private_users[birth3]"}
              options={this.state.day}
              placeholder={"日"}
              onChange={this.checkAdult}
            />
        </div>
      </React.Fragment>
    );
  }
}

export default Birth

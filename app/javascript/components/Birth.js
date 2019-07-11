import React from "react"
import PropTypes from "prop-types"
import Select from 'react-select'

const yearItems = [];
for (let i = 1950; i <= 2000; i++) {
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


const Year = () => (
  <Select id={"yearSelect"} name={"private_users[birth1]"} options={yearItems} placeholder={"年"} value={this.state.value}/>
)
const Month = () => (
  <Select name={"private_users[birth2]"} options={monthItems} placeholder={"月"} />
)
const Day = () => (
  <Select name={"private_users[birth3]"} options={dayItems} placeholder={"日"}/>
)

const getMonthDays = () => {  
  console.log("Test");
};

let textInput = React.createRef();


class Birth extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      year: '',
      day: dayItems
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({year: e.value});
  }

  getMonthDays = (e) => {
    const year = this.state.year;
    const month_tmp = e.value;

    var month = "";
    if (String(month_tmp).length == 1) {
      month = '0' + month_tmp;
    }else{
      month = month_tmp;
    }

    const lastDay = new Date(year, month + 1, 0).getDate();
    console.log(lastDay);
    var dayItems = [];
    for (let i = 1; i <= Number(lastDay); i++) {
      dayItems.push(
        { value: i, label: i},
      )
    }
    this.setState({day: dayItems});
  };

  render () {
    return (
      <React.Fragment>
        <div>
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
              onChange={this.getMonthDays}
            />
            <Select
              id={"daySelect"}
              name={"private_users[birth3]"}
              options={this.state.day}
              placeholder={"日"}
            />
        </div>
      </React.Fragment>
    );
  }
}

export default Birth

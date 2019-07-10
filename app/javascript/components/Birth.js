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
const dayItems = [];
for (let i = 1; i <= 31; i++) {
  dayItems.push(
    { value: i, label: i},
  )
}

const Year = () => (
  <Select options={yearItems} />
)
const Month = () => (
  <Select options={monthItems} />
)
const Day = () => (
  <Select options={dayItems} />
)

class Birth extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      year: yearSet,
      month: monthSet,
      day: daySet
    }
  }

  render () {
    return (
      <React.Fragment>
        <div>
          <label>誕生日</label>
            <Year />
            <Month />
            <Day />
        </div>
      </React.Fragment>
    );
  }
}

export default Birth

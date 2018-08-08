import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

class Search extends Component {
  state = {
    startDate: moment()
  };

  handleStartDateChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <div>
        <div className="field">
          <div className="select">
            <select>
              {[...Array(10).keys()].map((_, i) => <option>{i + 1}</option>)}
            </select>
          </div>
          <div className="field">
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleStartDateChange}
              popperPlacement="bottom-end"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;

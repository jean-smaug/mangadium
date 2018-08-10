import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { observer, inject } from "mobx-react";

import "../utils/burgerButtonToggle";
@inject("search")
@observer
class Search extends Component {
  state = {
    search: "",
    startDate: moment()
  };

  handleSearchedString = ({ target: { value: search } }) => {
    this.setState({
      search
    });
  };

  reload = () => {
    location.reload();
  };

  search = () => {
    this.props.search.search(this.state.search);
  };

  handleStartDateChange = date => {
    console.log(date);
    this.props.search.setStartDate(date);
  };

  render() {
    const { search } = this.props;
    return (
      <div>
        <nav
          className="navbar is-dark"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <div className="navbar-item" onClick={this.reload}>
              Mangadium
            </div>

            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div className="navbar-menu">
            <div
              className="navbar-end"
              style={{ transform: "translate(-15px, 8px)" }}
            >
              <div className="field">
                <DatePicker
                  selected={search.startDate}
                  onChange={this.handleStartDateChange}
                  popperPlacement="bottom-end"
                />
              </div>
              {/* <div className="field">
                <div className="select">
                  <select>
                    {[...Array(10).keys()].map((_, i) => (
                      <option key={i}>{i + 1}</option>
                    ))}
                  </select>
                </div>
              </div> */}
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Search..."
                    onChange={this.handleSearchedString}
                  />
                </div>
                <div className="control">
                  <a className="button is-info" onClick={this.search}>
                    Search
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Search;

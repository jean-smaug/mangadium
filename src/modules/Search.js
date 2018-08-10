import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { observer, inject } from "mobx-react";

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

  search = () => {
    this.props.search.search(this.state.search);
  };

  handleStartDateChange = date => {
    this.setState({
      startDate: date
    });
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
            <a className="navbar-item" href="/">
              Mangadium
            </a>

            <div
              style={{ transform: "translateY(8px)" }}
              className="field has-addons"
            >
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
        </nav>
        <div className="field">
          <div className="select">
            <select>
              {[...Array(10).keys()].map((_, i) => (
                <option key={i}>{i + 1}</option>
              ))}
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

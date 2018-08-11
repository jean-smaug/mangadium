import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import { SearchPropTypes } from '../models/Search'

@inject('search')
@observer
class Search extends Component {
  static propTypes = SearchPropTypes

  handleSearchedString = ({ target: { value: research } }) => {
    this.props.search.setResearch(research)
  }

  reload = () => {
    location.reload()
  }

  search = e => {
    if (e.keyCode === 13 || e.target.type === 'submit') {
      this.props.search.search(this.state.search)
    }
  }

  handleStartDateChange = date => {
    this.props.search.setStartDate(date)
  }

  render () {
    const { search } = this.props
    return (
      <div>
        <nav className='navbar is-dark is-fixed-top' role='navigation' aria-label='main navigation'>
          <div className='container'>
            <div className='navbar-brand'>
              <div className='navbar-item' onClick={this.reload}>
                Mangadium
              </div>

              <a role='button' className='navbar-burger' aria-label='menu' aria-expanded='false'>
                <span aria-hidden='true' />
                <span aria-hidden='true' />
                <span aria-hidden='true' />
              </a>
            </div>
            <div className='navbar-menu'>
              <div className='navbar-end' style={{ transform: 'translateY(8px)' }}>
                <div className='field has-addons'>
                  <div className='control'>
                    <input
                      className='input'
                      type='text'
                      placeholder='One Piece...'
                      value={search.research}
                      onChange={this.handleSearchedString}
                      onKeyUp={this.search}
                    />
                  </div>
                  <div className='control'>
                    <button
                      className='button is-info'
                      onClick={this.search}
                      disabled={search.isSearchDisabled}
                      type='submit'
                    >
                      Chercher
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Search

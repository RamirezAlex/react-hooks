import React, { Component } from 'react'

class QuoteListWithoutHooks extends Component {
  state = {
    quotes: [],
    search: ''
  }

  handleSearchChange = (e) => {
    this.setState({
      search: e.target.value
    })

    fetch(`https://quote-garden.herokuapp.com/quotes/search/${e.target.value}`)
      .then((response) => {
        response.json()
          .then((quotes) => {
            this.setState({
              quotes: quotes.results
            })
          })
      })
  }
  render() {
    return (
      <div>
        <input type='text' value={this.state.search} onChange={this.handleSearchChange} />
        <ul>
          {
            this.state.quotes.map((quote) => {
              return (<li>{ quote.quoteText }</li>)
            })
          }
        </ul>
      </div>
    )
  }
}

export default QuoteListWithoutHooks

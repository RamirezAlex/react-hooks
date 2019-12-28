import React, { Component } from 'react'
import loader from './loader.gif'

class QuoteOfTheDayWithoutHooks extends Component {
  state = {
    quote: {}
  }

  componentDidMount() {
    fetch('https://quote-garden.herokuapp.com/quotes/random')
      .then((response) => {
        response.json()
          .then((quote) => {
            this.setState({ quote })
          })
      })
  }

  render() {
    const { quoteText, quoteAuthor} = this.state.quote

    return (
      <div>
        { 
          quoteText ?
            <div>
              <h3>Quote of the day</h3>
              <p>{ `" ${quoteText} " - ${quoteAuthor}` }</p>
            </div>
          :
            <img src={loader} alt='loading...' width='120' />
        }
      </div>
    )
  }
}

export default QuoteOfTheDayWithoutHooks

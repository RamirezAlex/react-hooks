import React, { useState, useEffect } from 'react'
import loader from './loader.gif'

const QuoteOfTheDayWithHooks = ({ color }) => {
  const [quote, setQuote] = useState({})
  useEffect(() => {
    fetch('https://quote-garden.herokuapp.com/quotes/random')
    .then((response) => {
      response.json()
        .then((quote) => {
          setQuote(quote)
        })
    })
  }, [])

  const colors = [
    '#98f4c2',
    '#09f2a1',
    '#ff45c6',
    '#57c4fd'
  ] 
  
  const { quoteText, quoteAuthor } = quote
  const stylus = {
    backgroundColor: colors[color],
    minHeight: color * 100
  }
  return (
    <div style={ stylus }>
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

export default QuoteOfTheDayWithHooks

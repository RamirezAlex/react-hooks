import React, { useState, useEffect } from 'react'
import loader from './loader.gif'

const QuoteOfTheDayWithHooks = () => {
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
  
  const { quoteText, quoteAuthor } = quote

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

export default QuoteOfTheDayWithHooks

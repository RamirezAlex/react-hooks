import React, { useState } from 'react'

const QuoteListWithHooks = () => {
  const [quotes, setQuotes] = useState([])
  const [search, setSearch] = useState('')

  const handleSearchChange = (e) => {
    setSearch(e.target.value)

    fetch(`https://quote-garden.herokuapp.com/quotes/search/${e.target.value}`)
      .then((response) => {
        response.json()
          .then((quotes) => {
            setQuotes(quotes.results)
          })
      })
  }

  return (
    <div>
      <input type='text' value={search} onChange={ handleSearchChange } />
      <ul>
        {
          quotes.map((quote) => {
            return (<li>{ quote.quoteText }</li>)
          })
        }
      </ul>
    </div>
  )
}

export default QuoteListWithHooks

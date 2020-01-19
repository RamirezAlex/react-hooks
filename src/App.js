import React, { useState } from 'react';
import WithoutHooks from './components/WithoutHooks/WithoutHooks'
import WithHooks from './components/WithHooks/WithHooks'

import QuoteOfTheDayWithoutHooks from './components/WithoutHooks/QuoteOfTheDayWithoutHooks'
import QuoteOfTheDayWithHooks from './components/WithHooks/QuoteOfTheDayWithHooks'

import QuoteListWithoutHooks from './components/WithoutHooks/QuoteListWithoutHooks'
import QuoteListWithHooks from './components/WithHooks/QuoteLIstWithHooks'


import './App.css';

function App() {
  const [color, setColor] = useState(0)
  
  return (
    <div className="App">
      <h1>Without React Hooks</h1>
      <table>
        <tbody>
          <WithoutHooks name='Counter 1' />
          <WithoutHooks name='Counter 2' />
        </tbody>
      </table>
      <QuoteOfTheDayWithoutHooks />
      <QuoteListWithoutHooks />
      <hr />
      <h1>With React Hooks</h1>
      <table>
        <tbody>
          <WithHooks name='Counter 1' setColor={setColor} />
          <WithHooks name='Counter 2' />
        </tbody>
      </table>
      <QuoteOfTheDayWithHooks color={color} />
      <QuoteListWithHooks />
    </div>
  );
}

export default App;

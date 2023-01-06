import React, { useState } from 'react'
import { coin } from './types'

export function App() {
  const [coindata, setCoinData] = useState({
    data: [],
  }) /*    using { data: [] } as a placeholder for the data that will be fetched.
           Figuring out how to structure this was a bit of a challenge.            */

  console.log(coindata)

  async function listOfCoins() {
    try {
      const response = await fetch('https://api.coincap.io/v2/assets')
      const data = await response.json()
      setCoinData(data)
    } catch (error) {
      // handle error
      console.log(error)
    }
    return (
      <div>
        {coindata.data.map((coin: coin) => (
          <div key={coin.symbol.toString()}>
            <h2>{coin.name}</h2>
            <p>Rank: {coin.rank}</p>
            <p>Symbol: {coin.symbol}</p>
            <p>Price: {coin.priceUsd}</p>
            <p>Market Cap: {coin.marketCapUsd}</p>
            <p>Volume: {coin.volumeUsd24Hr}</p>
            <p>Change: {coin.changePercent24Hr}</p>
            <p>Explorer: {coin.explorer}</p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <h1>Crypto Tracker</h1>
      <button onClick={listOfCoins()}>Get Coins</button>
    </div>
  )
}

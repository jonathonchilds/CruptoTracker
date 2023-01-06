type coin = {
  id: Text
  rank: Number
  symbol: Text
  name: Text
  supply: Number
  maxSupply: Number | null
  marketCapUsd: Number
  volumeUsd24Hr: Number
  priceUsd: Number
  changePercent24Hr: Number
  vwap24Hr: Number
  explorer: URL
}

export type { coin }

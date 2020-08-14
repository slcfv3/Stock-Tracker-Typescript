export const SEND_MESSAGE = 'STOCK_RECEIVED'
export const SEARCH_SUBMITTED = 'SEARCH_SUBMITTED'
export const NEWS_RECEIVED = 'NEWS_RECEIVED'
export const PRICE_RECEIVED = 'PRICE_RECEIVED'
export const POSSIBLE_RECEIVED = 'POSSIBLE_RECEIVED'
export const STOCK_NOT_FOUND = 'STOCK_NOT_FOUND'

interface StockReceivedAction {
    type: typeof SEND_MESSAGE
    payload: any
  }
  
  interface SearchSubmittedAction {
    type: typeof SEARCH_SUBMITTED
    payload: {
      timestamp: string
    }
  }

  interface NewsReceivedAction {
    type: typeof NEWS_RECEIVED
    payload: any
  }

  interface PriceReceivedAction {
    type: typeof PRICE_RECEIVED
    payload: any
  }

  interface PossibleReceivedAction {
    type: typeof POSSIBLE_RECEIVED
    payload: any[]
  }

  interface StockNotFoundAction {
    type: typeof STOCK_NOT_FOUND
    
  }
  
  export type StockActionTypes = StockReceivedAction | SearchSubmittedAction | NewsReceivedAction | PriceReceivedAction | PossibleReceivedAction | StockNotFoundAction
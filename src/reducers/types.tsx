import { StockActionTypes } from "./actions"

export type StockState = {
    symbol: string,
    companyName: string,
    overview: Overview | undefined,
    price: number,
    priceChange: number,
    priceChangePercent: number,
    chart: Charts[]| undefined,
    coldChart: ColdChart | undefined,
    news: News[],
    keyStats: KeyStats | undefined,
    possible:Possible[],
    isLoading: boolean
} 

export interface News{
    headline:string,
    datetime:number,
    source: string
}

export interface Possible{
    symbol:string,
    securityName:string,
    exchange: string
}

export type rootReducerType<S, A extends StockActionTypes> = (
        state: S | undefined,
        action: A
    )=>S


export interface KeyStats {
    previousClose: number | null,
    volume: number | null,
    marketCap: number | null,
    peRatio: number | null,
    week52Low: number | null,
    week52High: number | null,
    avgTotalVolume: number | null,
    dividendYield: number | null,
    ttmEPS: number | null,
    low: number | null,
    high: number | null,
    open: number | null

}

export interface ColdChart {
    oneday: Oneday[],
    fiveday: Fiveday[],
    onemonth: Fiveday[],
    oneyear: Fiveday[],
    fiveyear: Fiveyear[],
    max:Fiveyear[]

}

export interface Oneday{
    date: string,
    minute: string,
    label: string,
    high: number | null,
    low: number | null,
    open: number | null,
    close: number | null,
    average: number | null,
    volume: number,
    notional: number,
    numberOfTrades: number
}

export interface Fiveday{
    date: string,
    label: string,
    high: number | null,
    low: number | null,
    open: number | null,
    close: number | null,
    uOpen: number,
    uClose: number,
    uHigh: number,
    uLow: number,
    uVolume: number,
    volume: number,
    change: number,
    changePercent: number,
    changeOverTime: number
}


export interface Fiveyear{
    date: string,
    label: string,
    high: number | null,
    low: number | null,
    open: number | null,
    close: number | null,
    uOpen: number,
    uClose: number,
    uHigh: number,
    uLow: number,
    uVolume: number,
    volume: number,
    change: number,
    changePercent: number,
    changeOverTime: number,
    currency:string
}



export interface Charts{ 
    date: string, 
    minute: string, 
    label: string, 
    high:number| null , 
    low:number| null , 
    open:number| null , 
    close: number| null, 
    average: number| null, 
    volume:number, 
    notional: number, 
    numberOfTrades: number 
}


export interface RowProp {
    children: React.ReactNode,
    maxWidth ?: string | null,
    hideWidth ?: string | null,
    minWidth ?: string | null,
    BackgroundImage ?: string | null,
    Padding ?: string | null,
    marginBottom ?: string | null,
    marginTop ?: string | null,
    columnGap ?: string | null,
    justifyContent ?: string | null,
    BorderRight ?: string | null
    
}

export interface GridProp{
    children?: React.ReactNode,
    breakpoint?: string | null,
    smallBreakpoint?: string | null
}

export interface ColProp{
    children: React.ReactNode,
    size?: number,
    hideWidth?: string,
    fontSize?: string,
    margin?: string,
    Padding?: string,
    BorderRight?: string,
    BorderColor?: string,
}

export interface PeerSymbolProp{
    breakpoint : string | null
}

export interface StyledPriceProp{
    children?: React.ReactNode,
    fontSize: string | undefined,
    breakpoint: string | undefined,
    smallBreakpoint: string | undefined
}

export interface PriceChangeProp{
    children?: React.ReactNode,
    fontSize: string | undefined,
    breakpoint: string | undefined,
    smallBreakpoint: string | undefined,
    change: number
}

export interface BlueLineProp{
    marginBottom?: string | null
}

export interface IconProp{
    iconSize: number,
    breakpoint: string | undefined ,
    smallBreakpoint: string | undefined,
}

export interface TagProp{
    children?: React.ReactNode,
    breakpoint: string | undefined
}

export interface ButtonProp{
    isActive?: boolean
}

export interface PriceProp{
    children?: React.ReactNode,
    fontSize: number | string,
    breakpoint?: string,
    smallBreakpoint?: string,
    justifyContent?: string
}

export interface PeerProp{
    breakpoint: string
}

export interface DropdownProp{
    children?: React.ReactNode,
    smallBreakpoint?: string,
    breakpoint?: string,
    lgbreakpoint?: string,
    xlgbreakpoint?: string
}

export interface AbortSignalLo{
    signal:AbortSignal
}

export type SearchActionType = {
    type: 'SEARCH_SUBMITTED' | 'SEARCH_ENTERED',
    payload: string
}

export interface StockDataType{
    previousClose: number,
    volume: number | null,
    marketCap: number,
    peRatio: number,
    week52Low: number,
    week52High: number,
    avgTotalVolume: number,
    stats:StatsData,
    low: number | null,
    high: number | null,
    open: number | null,
    symbol: string,
    companyName: string,
    overview: Overview,
    latestPrice: number,
    change: number,
    changePercent: number,
    chart: Charts[],
    coldcharts: ColdChart,
    news:NewsData[]
    
}

interface NewsData {
    datetime: number,
    headline: string,
    source: string,
    url: string,
    summary: string,
    related: string,
    image: string,
    lang: string,
    hasPaywall: boolean
}

interface StatsData{
    week52change:number | null,
    week52high: number ,
    week52low: number ,
    marketcap: number | null,
    employees: number | null,
    day200MovingAvg: number | null,
    day50MovingAvg: number | null,
    float: number | null,
    avg10Volume: number | null,
    avg30Volume: number | null,
    ttmEPS: number | null,
    ttmDividendRate: number | null,
    companyName: string,
    sharesOutstanding: number | null,
    maxChangePercent: number | null,
    year5ChangePercent: number | null,
    year2ChangePercent: number | null,
    year1ChangePercent: number | null,
    ytdChangePercent: number | null,
    month6ChangePercent: number | null,
    month3ChangePercent: number | null,
    month1ChangePercent: number | null,
    day30ChangePercent: number | null,
    day5ChangePercent: number | null,
    nextDividendDate: string | null,
    dividendYield: number | null,
    nextEarningsDate: string,
    exDividendDate: number | null,
    peRatio: number | null,
    beta: number | null,
}

interface Overview{
    symbol:string
    companyName: string,
    website:string,
    description: string
}


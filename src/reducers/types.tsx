export interface StockState{
    symbol: string,
    companyName: string,
    overview: any,
    price: number,
    priceChange: number,
    priceChangePercent: number,
    chart: any[],
    coldChart: ColdChart | null,
    news: any[],
    keyStats: KeyStats,
    peer: any[],
    possible:any[],
    isLoading: boolean
}

export interface Action{
    type:string,
    payload: any
}

export interface KeyStats {
    previousClose: number | null,
    iexVolume: number | null,
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
    oneday: any[],
    fiveday: any[],
    onemonth: any[],
    oneyear: any[],
    fiveyear: any[],
    max:any[]

}

export interface Charts{ 
    date: number, 
    minute: string, 
    label: any, 
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
    size?: number | null,
    hideWidth?: string | null,
    fontSize?: string | null,
    margin?: string | null,
    Padding?: string | null,
    BorderRight?: string | null,
    BorderColor?: string | null,
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
    breakpoint: string,
    lgbreakpoint: string,
    xlgbreakpoint: string
}

export interface AxisProp{
    dataKey:string,
    style: AxisStyle,
    stroke:string,
    ticks:string[] | undefined,
    interval?:string,
    children: never[],
    orientation?:string,
    domain?:number[]
}

type AxisStyle={
    fontSize: string,
    fill: string
}

export interface AbortSignal{
    signal:any
}

export type SearchActionType = {
    type: 'SEARCH_SUBMITTED' | 'SEARCH_ENTERED',
    payload: string
}


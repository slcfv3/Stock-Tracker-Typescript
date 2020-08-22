import React from "react";
import { useSelector,TypedUseSelectorHook } from 'react-redux'
import { Selector, createSelector } from 'reselect'
import { findHighValue, findLowValue, numberWithCommas, numberToPercent } from '../util'
import { BlueLine } from '../styled-components/lines'
import { Row, Col } from '../styled-components/wrappers'
import { SectionTitle } from '../styled-components/text'
import { StatTable, StatLabel, StatValue } from '../styled-components/stats'
import {StockState, Charts} from '../reducers/types'

const useTypedSelector: TypedUseSelectorHook<StockState> = useSelector
const Keystats = () => {
    const stats = useTypedSelector(state => state?.keyStats);
    const chartData :Selector<StockState, Charts[] | undefined>= state => state?.chart
    const openSelector = createSelector(
        chartData,
        (chart : Charts[] | undefined) => chart?(chart[1]?.open) : ''
    )
    const lowHighSelector = createSelector(
        chartData,
        (chart : Charts[] | undefined) => chart ? (findLowValue(chart) + '-' + findHighValue(chart)) : ''
    )
    return (
        <div className="keystats">
            <SectionTitle>KEY STATS</SectionTitle>
            <BlueLine marginBottom='0px'/>
            <Row  maxWidth='950px' marginBottom='30px'>
                <Col size={1}>
                    <StatTable>
                        <tbody>
                        <tr>
                            <StatLabel> Previous Close </StatLabel>
                            <StatValue data-testid="previous-close"> {stats?.previousClose} </ StatValue>
                        </tr>
                        <tr>
                            <StatLabel> Day Range </StatLabel>
                            <StatValue data-testid="day-range"> {useSelector(lowHighSelector)} </ StatValue>
                        </tr>
                        <tr>
                            <StatLabel> Volume </StatLabel>
                            <StatValue data-testid="volume"> {stats?.volume?numberWithCommas(stats?.volume):stats?.volume} </ StatValue>
                        </tr>
                        <tr>
                            <StatLabel> Market Cap </StatLabel>
                            <StatValue data-testid="market-cap"> {stats?.marketCap?numberWithCommas(stats?.marketCap):stats?.marketCap} </ StatValue>
                        </tr>
                        <tr>
                            <StatLabel> P/E Ratio </StatLabel>
                            <StatValue data-testid="peratio"> {stats?.peRatio} </ StatValue>
                        </tr>
                        </tbody>
                    </StatTable>
                </Col>
                <Col size={1}>
                    <StatTable>
                        <tbody>
                            <tr>
                                <StatLabel> Open </StatLabel>
                                <StatValue data-testid="openValue"> {useSelector(openSelector)} </ StatValue>
                            </tr>
                            <tr>
                                <StatLabel> 52 Week Range </StatLabel>
                                <StatValue data-testid="52range"> {(stats?.week52Low && stats?.week52High) ? stats?.week52Low + '-' + stats?.week52High : ''} </ StatValue>
                            </tr>
                            <tr>
                                <StatLabel> Total Avg Volume </StatLabel>
                                <StatValue data-testid="avg-volume"> {stats?.avgTotalVolume?numberWithCommas(stats?.avgTotalVolume):stats?.avgTotalVolume} </ StatValue>
                            </tr>
                            <tr>
                                <StatLabel> Earnings Per Share </StatLabel>
                                <StatValue data-testid="earnings"> {stats?.ttmEPS} </ StatValue>
                            </tr>
                            <tr>
                                <StatLabel> Dividend & Yield </StatLabel>
                                <StatValue data-testid="dividend"> {stats?.dividendYield?numberToPercent(stats?.dividendYield):null} </ StatValue>
                            </tr>
                        </tbody>
                    </StatTable>
                </Col>
            </Row>
        </div>
    );
}

export default Keystats;
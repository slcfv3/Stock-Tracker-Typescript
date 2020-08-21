import React from "react";
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { DollarIcon, DownArrowIcon, PercentIcon, UpArrowIcon } from '../styled-components/icons';
import { PriceChange, StyledPrice } from '../styled-components/price';
import { Col, Row } from '../styled-components/wrappers';
import {StockState, RowProp, ColProp, PriceProp, IconProp, StyledPriceProp, PriceChangeProp} from '../reducers/types'

const useTypedSelector: TypedUseSelectorHook<StockState> = useSelector
const RowLo = ({children, ...props}:RowProp) => <Row {...props}>{children}</Row>
const ColLo = ({children, ...props}:ColProp) => <Col {...props}>{children}</Col>
const DownArrowIconLo = ({ ...props}:IconProp) => <DownArrowIcon {...props}/>
const UpArrowIconLo = ({ ...props}:IconProp) => <UpArrowIcon {...props}/>

const StyledPriceLo = ({children, ...props}:StyledPriceProp) => <StyledPrice {...props}>{children}</StyledPrice>
const PriceChangeLo = ({children, ...props}:PriceChangeProp) => <PriceChange {...props}>{children}</PriceChange>
const Price = (props: PriceProp) => {
    const price = useTypedSelector(state => state?state.price:0);
    const priceChange = useTypedSelector(state => state?state.priceChange:0)
    const priceChangeDisplay = priceChange?Math.abs(priceChange).toFixed(2): 0
    const priceChangePercent = useTypedSelector(state => state?.priceChangePercent)
    const priceChangePercentDisplay = priceChangePercent? Math.abs(priceChangePercent).toFixed(2) : 0
    let arrowIcon;

    if (priceChange < 0) {
        arrowIcon = <DownArrowIconLo iconSize={Number(props.fontSize)} breakpoint={props.breakpoint} smallBreakpoint={props.smallBreakpoint} />
    }
    else {
        arrowIcon = <UpArrowIconLo iconSize={Number(props.fontSize)} breakpoint={props.breakpoint} smallBreakpoint={props.smallBreakpoint} />
    }

    return (
        <RowLo justifyContent={props.justifyContent ? props.justifyContent : 'flex-end'} columnGap='10px'>

            <RowLo columnGap='0px'>
                <ColLo>
                    <StyledPriceLo breakpoint={props.breakpoint} smallBreakpoint={props.smallBreakpoint} fontSize={props.fontSize + 'px'}> <DollarIcon iconSize={Number(props.fontSize)} breakpoint={props.breakpoint} smallBreakpoint={props.smallBreakpoint} />  </StyledPriceLo>
                </ColLo>
                <ColLo>
                    <StyledPriceLo breakpoint={props.breakpoint} smallBreakpoint={props.smallBreakpoint} fontSize={props.fontSize + 'px'}>  {price.toFixed(2)}  </StyledPriceLo>
                </ColLo>
            </RowLo>

            <RowLo columnGap='0px'>
                <ColLo Padding='0 0 0 0'>
                    <PriceChangeLo change={priceChange} breakpoint={props.breakpoint} smallBreakpoint={props.smallBreakpoint} fontSize={props.fontSize + 'px'}>   {arrowIcon}   </PriceChangeLo>
                </ ColLo>

                <ColLo BorderRight='solid 1.5px' Padding='0 10px 0 0' BorderColor={priceChange >= 0 ? 'rgba(145, 228, 165, 0.5)' : 'rgba(233, 86, 86, 0.5)'}>
                    <PriceChangeLo change={priceChange} breakpoint={props.breakpoint} smallBreakpoint={props.smallBreakpoint} fontSize={props.fontSize + 'px'}>  {priceChangeDisplay}   </PriceChangeLo>
                </ ColLo>
            </RowLo>

            <RowLo columnGap='0px'>
                <ColLo>
                    <PriceChangeLo change={priceChange} breakpoint={props.breakpoint} smallBreakpoint={props.smallBreakpoint} fontSize={props.fontSize + 'px'} >   {priceChangePercentDisplay}   </PriceChangeLo>
                </ColLo>
                <ColLo>
                    <PriceChangeLo change={priceChange} breakpoint={props.breakpoint} smallBreakpoint={props.smallBreakpoint} fontSize={props.fontSize + 'px'} >   <PercentIcon iconSize={Number(props.fontSize)} breakpoint={props.breakpoint} smallBreakpoint={props.smallBreakpoint} />   </PriceChangeLo>
                </ColLo>
            </RowLo>
        </RowLo>
    );
}

export default Price;
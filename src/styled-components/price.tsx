import styled from 'styled-components'
import {StyledPriceProp, PriceChangeProp} from '../reducers/types'

export const StyledPrice = styled.p`
  margin: 0px;
  font-family: Lato;
  font-size: ${(prop: StyledPriceProp) => prop.fontSize ? prop.fontSize : '40px'};
  @media (max-width: ${(prop: StyledPriceProp) => prop.breakpoint ? prop.breakpoint : '0px'}) {
    font-size: 30px;
  }
  @media (max-width: ${(prop: StyledPriceProp)  => prop.smallBreakpoint ? prop.smallBreakpoint : '0px'}) {
    font-size: 20px;
  }

  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  cursor: default;
`

export const PriceChange = styled.p`
  margin: 0px;
  font-family: Lato;
  font-size: ${(prop: PriceChangeProp)  => prop.fontSize ? prop.fontSize : '40px'};
  @media (max-width: ${(prop: PriceChangeProp) => prop.breakpoint ? prop.breakpoint : '0px'}) {
    font-size: 30px;
  }
  @media (max-width: ${(prop: PriceChangeProp) => prop.smallBreakpoint ? prop.smallBreakpoint : '0px'}) {
    font-size: 20px;
  }
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${(prop: PriceChangeProp) => prop.change >= 0 ? '#91e4a5' : '#e95656'};
  cursor: default;
`
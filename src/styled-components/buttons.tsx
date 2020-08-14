import styled from 'styled-components'
import {ButtonProp} from '../reducers/types'

export const StockTag = styled.button`
border-radius: 2px;
background-color: #415f8a;
border: none;
padding: 5px 20px 5px 20px;
margin: 0px 10px 0px 10px;

font-family: 'Lato', sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`

export const ChartButton = styled.button`
font-family: Lato, sans-serif;
font-size: 12px;
font-weight: 300;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
text-align: left;
border: none;
outline: none;
color: ${(prop:ButtonProp) => prop.isActive? 'white' : '#beccdc'};
background: transparent
`

export const HeaderTab = styled.button`
border-radius: 3px;
background-color: ${(prop:ButtonProp) => prop.isActive ? '#0068ff' : 'transparent'};
border: none;
padding: 5px 10px 5px 10px;
margin: 0px 0px 0px 50px;

font-family: 'Lato', sans-serif;
  font-size: 18px;
  font-weight: ${(prop:ButtonProp) => prop.isActive ? 'normal' : '300'};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`
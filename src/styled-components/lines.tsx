import styled from 'styled-components'
import {BlueLineProp} from '../reducers/types'

export const BlueLine = styled.hr`
background-color: #7fb3ff;
border: none;
height: 2px;
width: 100%;
margin-bottom: ${(prop: BlueLineProp) => prop.marginBottom ? prop.marginBottom : '1%'};
margin-top: 5px;
`

export const GreyLine = styled.hr`
background-color: #415f8a;
border: none;
height: 2px;
width: 100%;
margin-bottom: 1%;
`

export const RedLine = styled.hr`
background-color: #e95656;
border: none;
height: 1px;
width: 100%;
margin-bottom: 1%;
`

export const VerticalLine = styled.div`
border-left: 1px;
left: 50%;
`
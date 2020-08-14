import styled from 'styled-components'
import {GridProp, RowProp, ColProp} from '../reducers/types'

export const Grid = styled.div`
    position: relative;
    padding-top: 2%;
    padding-bottom: 0;
    padding-right: 10%;
    padding-left: 10%;
    @media (max-width: ${(prop :GridProp) => prop.breakpoint ? prop.breakpoint : '15300px'}) {
        padding-right: 5%;
        padding-left: 5%;
    }
    @media (max-width: ${(prop :GridProp) => prop.smallBreakpoint ? prop.smallBreakpoint : '950px'}) {
        padding-right: 3%;
        padding-left: 3%;
    }
`

export const Row = styled.div`
    @media (max-width: ${(prop :RowProp) => prop.maxWidth ? prop.maxWidth : '0px'}) {
        flex-direction: column;
    }
    @media (max-width: ${(prop :RowProp) => prop.hideWidth ? prop.hideWidth : '0px'}) {
        display: none;
    }
    @media (min-width: ${(prop :RowProp)=> prop.minWidth ? prop.minWidth : '900000px'}) {
        display: none;
    }
    background-image: ${(prop :RowProp) => prop.BackgroundImage ? prop.BackgroundImage : 'transparent'};
    display: flex;
    overflow: hidden;
    padding: ${(prop :RowProp) => prop.Padding ? prop.Padding : '0 0 0 0'};
    margin-bottom: ${(prop :RowProp) => prop.marginBottom ? prop.marginBottom : 'none'};
    margin-top: ${(prop :RowProp) => prop.marginTop ? prop.marginTop : 'none'};
    column-gap: ${(prop :RowProp) => prop.columnGap ? prop.columnGap : '50px'};
    justify-content: ${(prop :RowProp) => prop.justifyContent ? prop.justifyContent : 'flex-start'};
    border-right: ${(prop :RowProp) => prop.BorderRight ? prop.BorderRight : 'none'}
`    

export const Col = styled.div`
    flex: ${(prop :ColProp) => prop.size};
    @media (max-width: ${(prop :ColProp) => prop.hideWidth ? prop.hideWidth : '0px'}) {
        display: none;
    }
    font-size: ${(prop :ColProp) => prop.fontSize ? prop.hideWidth : 'default'};
    margin: ${(prop :ColProp) => prop.margin ? prop.margin : '0 0 0 0'};
    padding: ${(prop :ColProp) => prop.Padding ? prop.Padding : '0 0 0 0'};
    border-right: ${(prop :ColProp) => prop.BorderRight ? prop.BorderRight : 'none'};
    border-color: ${(prop :ColProp) => prop.BorderColor ? prop.BorderColor : 'none'};
    align-items: center;
`
import React from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { DropdownBody, ExchangeTag, ExchangeText, NameTag, Option, OptionList, SymbolTag, TagContainer } from '../styled-components/dropdown';
import {StockState, DropdownProp, TagProp} from '../reducers/types'

const useTypedSelector: TypedUseSelectorHook<StockState> = useSelector
const DropdownBodyLo = ({children, ...props}:DropdownProp) => <DropdownBody {...props}>{children}</DropdownBody>
const OptionListLo = ({children, ...props}:DropdownProp) => <OptionList {...props}>{children}</OptionList>
const NameTagLo = ({children, ...props}:TagProp) => <NameTag {...props}>{children}</NameTag>

const DropDown = (props: DropdownProp) => {
  
  
  const dispatch = useDispatch();
  
  const possible = useTypedSelector(state => state?.possible)
  
  
  const onClick = (symbol:string) =>{
    dispatch({ type: 'SEARCH_SUBMITTED', payload: symbol });
  }

  const onBlurHandler = () => {
    dispatch({ type: 'POSSIBLE_RECEIVED', payload: [] })
  }

  if(possible&&possible.length) {
    return(
        <DropdownBodyLo xlgbreakpoint={props.xlgbreakpoint} lgbreakpoint={props.lgbreakpoint} breakpoint={props.breakpoint} smallBreakpoint={props.smallBreakpoint}>
            <OptionListLo xlgbreakpoint={props.xlgbreakpoint} lgbreakpoint={props.lgbreakpoint} breakpoint={props.breakpoint}>
                {possible.map((optionName, index) => {
                
                return (
                    <Option key={optionName?.symbol} onMouseDown={()=>onClick(optionName?.symbol)} onBlur={() => onBlurHandler}>
                    <SymbolTag>{optionName?.symbol}</SymbolTag> <TagContainer><NameTagLo breakpoint={props.smallBreakpoint}>{optionName?.securityName}</NameTagLo> <ExchangeText breakpoint={props.breakpoint}>{optionName?.exchange}</ExchangeText><ExchangeTag breakpoint={props.breakpoint}></ExchangeTag></TagContainer>
                    </Option>
                );

                })}
            </OptionListLo>
        </DropdownBodyLo>
    );
  } else {
    return(
        <DropdownBodyLo xlgbreakpoint={props.xlgbreakpoint} lgbreakpoint={props.lgbreakpoint} breakpoint={props.breakpoint} smallBreakpoint={props.smallBreakpoint}>
          <OptionListLo xlgbreakpoint={props.xlgbreakpoint} lgbreakpoint={props.lgbreakpoint} breakpoint={props.breakpoint}>
          </OptionListLo>
        </DropdownBodyLo>
    );
  }
  
}

export default DropDown;
import React from "react";
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { SectionTitle, CompanyName, CompanyWebsite, CompanyDescription } from '../styled-components/text'
import { BlueLine } from '../styled-components/lines'
import {StockState} from '../reducers/types'

const useTypedSelector: TypedUseSelectorHook<StockState> = useSelector
const Overview = () => {
    const overview = useTypedSelector(state => state?.overview);
    return (
        <div>
           <SectionTitle>COMPANY OVERVIEW</SectionTitle>
           <BlueLine />
           <CompanyName data-testid="company-name">{(overview?.companyName && overview?.symbol) ? overview.companyName+' ('+overview.symbol+')' : ''}</CompanyName> 
            <CompanyWebsite data-testid="website">{overview?.website}</CompanyWebsite>
            <CompanyDescription data-testid="description">{overview?.description}</CompanyDescription>
        </div>
    );
}

export default Overview;
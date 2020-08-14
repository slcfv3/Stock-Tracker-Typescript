import React from "react";
import { StockTag } from '../styled-components/buttons'

const StockTags = () => {

    return (
        <div>
            <StockTag>NASDAQ</StockTag>
            <StockTag>TECHNOLOGY</StockTag>
            <StockTag>USD</StockTag>
        </div>
    );
}

export default StockTags;
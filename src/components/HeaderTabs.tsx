import React from "react";
import { HeaderTab } from '../styled-components/buttons'

const HeaderTabs = () => {

    return (
        <div>
            <HeaderTab isActive>QUOTES</HeaderTab>
            <HeaderTab>MARKETS</HeaderTab>
            <HeaderTab>WATCHLIST</HeaderTab>
        </div>
    );
}

export default HeaderTabs;
import React, {Fragment, useEffect, useState} from "react";
import PortfolioForm from "./PortfolioForm";
import {filterSearchResults} from "../utils/searchResults";
import {doRequests, getETFHoldingsPath} from "../finnhub/network";
import {SYMBOL} from "../finnhub/Fund";
import PortfolioVenn from "./PortfolioVenn";

const Portfolio = () => {

    // let matchingHoldings = undefined;
    // if (funds) {
    //     matchingHoldings = getAllMatchingHoldings(funds);
    // }
    // const overviewProps = { matchingHoldings, funds }

    const formProps = { setSearchResults }

    return (
        <PortfolioForm {...formProps} />
        // <PortfolioVenn {...formProps} />
    );
}

export default Portfolio;
import React, {createContext, Fragment, useContext, useEffect, useReducer, useState} from "react";
import {filterSearchResults} from "../utils/searchResults";
import {doRequests, getETFHoldingsPath} from "../finnhub/network";
import {SYMBOL} from "../finnhub/Fund";
import {createDiagram} from "../utils/vennDiagram";

export const PortfolioContext = createContext(undefined);

const SEARCH_ACTION_COMPLETE = "_search_portfolio_funds_complete";

const initialState = {
    portfolio: undefined,
    searchResults: undefined,
    portfolioResult: undefined,
};

const reducer = (state, action) => {
    switch (action.type) {
        case SEARCH_ACTION_COMPLETE:
            return {
                portfolio: action.allFunds,
                searchResults: action.searchResults,
                portfolioResult: action.portfolioResults,
            };
        default: return state;
    }
}

export const PortfolioProvider = ({children}) => {
    const [allFunds, setFunds] = useState(undefined);
    const [searchResults, setSearchResults] = useState(undefined);
    const [portfolioResults, setPortfolioResults] = useState(undefined);

    const successListener = () => {
        const result = {allFunds, searchResults, portfolioResults};
        // dispatch(result);
        onSearchActionComplete(result);
    }
    useEffect(() => successListener(), [allFunds]);

    const fundLookupListener = () => {
        if (!portfolioResults) return;

        const resultFunds = portfolioResults.map(response => response.data);
        setFunds(resultFunds);
    }
    useEffect(() => fundLookupListener(), [portfolioResults]);

    const portfolioSearchListener = () => {
        if (!searchResults) {
            return;
        }

        const filtered = filterSearchResults(
            searchResults.searchPathMap, searchResults.response);
        const fundPaths = filtered.map((fund) => getETFHoldingsPath(fund[SYMBOL]));
        doRequests(fundPaths, setPortfolioResults);
    }
    useEffect(() => portfolioSearchListener(), [searchResults]);

    const generateVenn = (viewId) => {
        createDiagram(viewId, allFunds);
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    const onSearchActionComplete = (allFundsResult) => dispatch({
        type: SEARCH_ACTION_COMPLETE,
        allFundsResult
    });

    return <PortfolioContext.Provider
        value={{
            setSearchResults,
            allFunds,
            generateVenn,
        }}>
        {children}
    </PortfolioContext.Provider>;
}

export const usePortfolio = () => useContext(PortfolioContext);
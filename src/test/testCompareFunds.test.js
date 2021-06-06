import '@testing-library/jest-dom/extend-expect'
import {getAllMatchingHoldings, getMatchingHoldings} from "../utils/fundHoldings";

const sharedHoldings = [
    { "symbol": "MSFT" },
    { "symbol": "INTC" },
    { "symbol": "KO" },
];
const mockFundA = {
    "holdings": [
        ...sharedHoldings,
        { "symbol": "HD" },
        { "symbol": "PFE" },
    ]
};
const mockFundB = {
    "holdings": [
        ...sharedHoldings,
        { "symbol": "MMM" },
        { "symbol": "V" },
    ]
};
const mockFundC = {
    "holdings": [
        ...sharedHoldings,
        { "symbol": "OPTAX" },
        { "symbol": "ABC" },
        { "symbol": "CBA" },
        { "symbol": "DKY" },
    ]
};

test('getAllMatchingHoldings returns an array of stocks with matching symbols',() => {
    const funds = [mockFundA, mockFundB, mockFundC];
    expect(getAllMatchingHoldings(funds)).toEqual(sharedHoldings)
})

test('getMatchingHoldings returns an array of stocks with matching symbols',() => {
    expect(getMatchingHoldings(mockFundA, mockFundB)).toEqual(sharedHoldings)
})

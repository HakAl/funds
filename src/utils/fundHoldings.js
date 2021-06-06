import {HOLDINGS} from "../finnhub/Fund";

export const getAllMatchingHoldings = (funds = []) => {
    if (funds.length === 0) return []
    if (funds.length === 1) return funds[HOLDINGS]
    let result = [];
    for (let i = 0; i < funds.length-1; i++) {
        result = getMatchingHoldings(funds[i], funds[i+1]);
    }
    return result;
}

/**
 * Compare the holdings of 2 funds.
 *
 * @param {object} fundA
 * @param {object} fundB
 * @returns {*[]} array with stocks contained in both funds
 */
export const getMatchingHoldings = (fundA= {}, fundB = {}) => {
    var result = [];
    const fundAHoldings = fundA[HOLDINGS];
    const fundBHoldings = fundB[HOLDINGS];
    const fundBDict = {};
    fundBHoldings.forEach(holding => {
        fundBDict[holding.symbol] = holding;
    });
    let holder;
    fundAHoldings.forEach(holding => {
        holder = fundBDict[holding.symbol];
        if (holder) {
            result.push(holder);
        }
    });
    return result
}

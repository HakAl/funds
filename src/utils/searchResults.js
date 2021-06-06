import {SYMBOL} from "../finnhub/SearchResult";

/**
 *
 * @param searchPathMapping dict with contents { path: tickerSymbol }
 * @param response          response from network->searchBySymbol()
 * @returns {{}|{}[]}       an array of results where tickerSymbol is set as key and
 *                          search result json as value
 */
export const filterSearchResults = (searchPathMapping = {}    , response = []) => {
    if (!response || response.length === 0) return []

    const hasBadData = response.map(result => !result.config || !result.data)[0]
    if (hasBadData) return []

    const keys = response.map(result => searchPathMapping[result.config.url])
    const allSearchResults = response
        .flatMap(result => result.data.result)
        .filter(result => !result.hasOwnProperty('primary'));

    return keys.map(key => (allSearchResults.filter(result => result[SYMBOL] === key.toUpperCase())[0]));
}
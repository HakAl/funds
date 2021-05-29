export const isPortfolioValid = (portfolio = '') => {
    portfolio += '';
    portfolio = portfolio.trim();
    if (portfolio.length === 0) return false;
    if (!isChar(portfolio.charAt(0))) return false;
    if (!isChar(portfolio.charAt(portfolio.length-1))) return false;
    const regex = new RegExp('[a-zA-Z ,]')
    return regex.test(portfolio);
}

export const splitPortfolio = (portfolioString = '') => {
    portfolioString += '';
    portfolioString = portfolioString.trim();
    if (portfolioString.length === 0) return [];

    if (!isChar(portfolioString.charAt(0))) {
        portfolioString = portfolioString.slice(1, portfolioString.length);
        //sorry
        if (!isChar(portfolioString.charAt(0))) {
            return [];
        }
    }
    if (!isChar(portfolioString.charAt(portfolioString.length-1))) {
        portfolioString = portfolioString.slice(0, -1);
        //sorry
        if (!isChar(portfolioString.charAt(portfolioString.length-1))) {
            return [];
        }
    }

    if (!portfolioString.includes(',')
        && !portfolioString.includes(' ')) {
        return [ portfolioString ];
    }

    if (portfolioString.includes(',')) {
        portfolioString = portfolioString.replace(' ', '');
        return getPortfolioArray(',', portfolioString);
    }

    if (portfolioString.includes(' ')) {
        return getPortfolioArray(' ', portfolioString);
    }
}

const isChar = (variable) => variable.toUpperCase() !== variable.toLowerCase();

const getPortfolioArray = (splitChar, portfolio) => {
    return portfolio.split(splitChar)
        .map(x => x.trim())
        .filter(y => y.length > 0);
}
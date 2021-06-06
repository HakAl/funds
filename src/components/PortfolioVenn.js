import React, {useEffect} from "react";
import styles from "../../styles/Home.module.css";
import {getAllMatchingHoldings} from "../utils/fundHoldings";
import {NUMBER_OF_HOLDINGS} from "../finnhub/Fund";
import {PortfolioProvider, usePortfolio} from "./PortfolioProvider";
import * as d3 from "d3";
const venn = require('venn.js')

const PortfolioVenn = () => {
    const {allFunds, generateVenn} = usePortfolio();
    if (!allFunds) return null;
    //
    // useEffect(() => {
    //     const matchingHoldings = getAllMatchingHoldings()
    //     let fundSets = allFunds.map(
    //         fund => ({sets: [fund.symbol], size: fund[NUMBER_OF_HOLDINGS]})
    //     )
    //     fundSets.push({
    //         sets: allFunds.map(fund => fund.symbol),
    //         size: matchingHoldings.length
    //     })
    //     let chart = venn.VennDiagram()
    //     chart = chart.wrap(false)
    //         .fontSize("16px")
    //         .width(320)
    //         .height(320);
    //     d3
    //         .select('venn')
    //         .datum(fundSets)
    //         .call(chart);
    // }, [])

    return <div className={styles.card}>
        <h2>Overlap</h2>
        <div id="venn" />
    </div>
}

export default PortfolioVenn
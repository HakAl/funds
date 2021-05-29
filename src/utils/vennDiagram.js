import {getAllMatchingHoldings} from "./fundHoldings";
import {NUMBER_OF_HOLDINGS} from "../finnhub/Fund";
import * as d3 from "d3";
import {useEffect} from "react";

const venn = require('venn.js')

export const createDiagram = (viewId, allFunds) => {
    useEffect(() => {
        console.dir({
            viewId, allFunds
        })
        const matchingHoldings = getAllMatchingHoldings()
        let fundSets = allFunds.map(
            fund => ({sets: [fund.symbol], size: fund[NUMBER_OF_HOLDINGS]})
        )
        fundSets.push({
            sets: allFunds.map(fund => fund.symbol),
            size: matchingHoldings.length
        })
        let chart = venn.VennDiagram()
        chart = chart.wrap(false)
            .fontSize("16px")
            .width(320)
            .height(320);
        d3
            .select('venn')
            .datum(fundSets)
            .call(chart);
    })
}
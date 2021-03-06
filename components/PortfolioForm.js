import React, {useState} from "react";
import {Fragment} from "react";
import styles from "../styles/Home.module.css";

const PortfolioForm = ({setSearchResults}) => {
    const [portfolio, setPortfolio] = useState('');
    const onSubmitPortfolio = (event) => {
        event.preventDefault();
        // if (!isPortfolioValid(portfolio)) return;
        // lookupPortfolio(portfolio, setSearchResults);
    }

    return <Fragment>
        <form className={styles.etfform} onSubmit={onSubmitPortfolio}>
            <label className={styles.description} htmlFor="input_portfolio">Get started by entering symbols:</label>
            <input
                placeholder={"arkk,agg SPY BND"}
                type="text"
                name="input_portfolio"
                id="input_portfolio"
                className={styles.code}
                value={portfolio}
                onChange={(e) => setPortfolio(e.target.value)}
            />
            <button className={styles.etfbutton} onClick={onSubmitPortfolio}>Submit</button>
        </form>
    </Fragment>
}

export default PortfolioForm;
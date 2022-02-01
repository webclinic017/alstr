![alstr build notes graphic](./readme/bn_title.png)

<!-- #region roadmap -->

## **ROADMAP**

### _**SPRINT 1:** Backtesting_

**Week 1:** Jan 31 - Feb 6

- [ ] fetch historical market data
- [ ] insert historical data into database for backtesting

**Week 2:** Feb 7 - Feb 13

- [ ] backtest strategy using historical market data
- [ ] generate backtesting P&L reports
- [ ] _start researching machine-learning models using [Tensorflow.js](https://www.tensorflow.org/js/))_

<details>
<summary><strong>SPRINT 2: </strong> Forward Testing</summary>

- [ ] stream real-time market data
- [ ] cache real-time market data (?)
- [ ] forward test strategy using real-time market data
- [ ] generate forward testing P&L reports

</details>

<details>
<summary><strong>SPRINT 3: </strong> Strategy Execution</summary>

- [ ] run strategy against real-time market data
- [ ] execute orders based on strategy entry/exit triggers
- [ ] send push notifications to assigned devices
- [ ] generate P&L reports for executed orders

</details>

<details>
<summary><strong>SPRINT 4: </strong> Strategy Management</summary>

- [ ] desktop GUI
- [ ] mobile GUI
- [ ] web GUI

</details>

<!-- #endregion /roadmap -->

<!-- #region resources -->

![alstr resources graphic](./readme/bn_resources.png)

## **Architecture**

- [algo-trading on AWS](https://aws.amazon.com/blogs/industries/algorithmic-trading-on-aws-with-amazon-sagemaker-and-aws-data-exchange/)
- [Alpaca React Native App](https://github.com/hackingthemarkets/alpaca-react-native)
- [Full Stack Trading App Tutorial](https://hackingthemarkets.com/)
- [hosting projects on a budget](https://www.youtube.com/watch?v=Kx_1NYYJS7Q&list=WL&index=5)
- [how to start with algo trading](https://wire.insiderfinance.io/how-to-start-with-algo-trading-learning-path-process-flow-design-and-data-analytics-bdd592e262e0)

## **Brokers**

- [Alpaca](https://alpaca.markets/)
- [Interactive Brokers](https://www.interactivebrokers.com/en/home.php)

## **Databases**

- [PostreSQL](https://www.postgresql.org/)
- [SupaBase](https://supabase.com/)

## **Design Patterns**

- [API Design Patterns For REST](https://blog.stoplight.io/api-design-patterns-for-rest-web-services)
- [JavaScript design patterns](https://www.patterns.dev)
- [patterns.dev](https://www.patterns.dev)

## **Market Data**

- [Alpaca](https://alpaca.markets/docs/api-documentation/api-v2/)
- [AlphaVantage](https://www.alphavantage.co/)
- [Finnhub](https://finnhub.io/)
- [IEX]()

## **Strategy/System Design**

- Better Trading System: [YouTube]() | [podcast]()
- Bloom Trading: [Udemy courses](https://www.udemy.com/user/mtg-team/)
- [trading algorithms explained](https://www.youtube.com/watch?v=YVqxCrxKC_c)

<!-- #endregion /resources -->

<!-- #region notes -->

![alstr notes graphic](./readme/bn_notes.png)

- Alpaca `bars` response object | [Symbol.asyncIterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
  - use `for await...of` to loop over bar objects
- [ESLint](https://eslint.org/docs/about/)
  - using it for project configs (Ignite's `__dev__` global)
- [RFC 3339 time format](https://datatracker.ietf.org/doc/html/rfc3339)

<!-- #endregion /notes -->

![alstr issues graphic](./readme/bn_issues.png)

![alstr lessons-learned graphic](./readme/bn_lessons-learned.png)

![alstr questions graphic](./readme/bn_questions.png)

- [ ] how to set up eslint globals to define environment variables

<!-- #region connect -->

![alstr connect graphic](./readme/rm_connect.png)

<div align='center'>

[Twitter](https://twitter.com/ephraimsmithdev) |
[email](mailto:github@ephraimsmith.dev) |
[ephraimsmith.dev](https://ephraimsmith.dev) |
[LinkedIn](https://linkedin.com/in/ephraimsmithdev) |
[Instagram](https://instagram.com/ephraimsmithdev) |
[GitHub](https://github.com/ephraimsmithdev)

</div>

<!-- #endregion /connect -->

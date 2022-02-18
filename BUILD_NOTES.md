![alstr build notes graphic](./assets/docs/bn_title.png)

<!-- #region ROADMAP -->

## **SPRINT 1 REQUIREMENTS**

- [ ] fetch historical market data
- [ ] insert data into database for backtesting
- [ ] backtest an example strategy against stored data

## **SPRINT 2 REQUIREMENTS**

- [ ] generate P&L reports from backtest
- [ ] mobile GUI

## **SPRINT 3 REQUIREMENTS**

- [ ] _start researching machine-learning models using [Tensorflow.js](https://www.tensorflow.org/js/))_
- [ ] stream real-time market data
- [ ] cache real-time market data (?)
- [ ] forward test strategy using real-time market data

## **SPRINT 4 REQUIREMENTS**

- [ ] generate forward testing P&L reports
- [ ] desktop GUI

## **SPRINT 5 REQUIREMENTS**

- [ ] run strategy against real-time market data
- [ ] execute orders based on strategy entry/exit triggers
- [ ] send push notifications to assigned devices

## **SPRINT 6 REQUIREMENTS**

- [ ] generate P&L reports for executed orders
- [ ] web GUI

<!-- #endregion /ROADMAP -->

<!-- #region RESOURCES -->

![alstr resources graphic](./assets/docs/bn_resources.png)

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

<!-- #endregion /RESOURCES -->

<!-- #region NOTES -->

![alstr notes graphic](./assets/docs/bn_notes.png)

- Alpaca `bars` response object | [Symbol.asyncIterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
  - use `for await...of` to loop over bar objects
- [ESLint](https://eslint.org/docs/about/)
  - using it for project configs (Ignite's `__dev__` global)
- [RFC 3339 time format](https://datatracker.ietf.org/doc/html/rfc3339)

<!-- #endregion /NOTES -->

<!-- #region QUESTIONS -->

![alstr questions graphic](./assets/docs/bn_questions.png)

- [ ] how to set up eslint globals to define environment variables

<!-- #endregion /QUESTIONS -->

<!-- #region CONNECT -->

![alstr connect graphic](./assets/docs/rm_connect.png)

<table align='center'>
  <tr >
    <td style="border: none;"><a alt='icon link to modevx github account' href='https://github.com/modevx' target='_blank'><img src="https://cdn.iconscout.com/icon/free/png-256/github-157-675821.png" width="90"></a></td> 
    <td style="border: none;"><a alt='icon link to modevx twitter account' href='https://twitter.com/_modevx' target='_blank'><img src="https://cdn.iconscout.com/icon/free/png-256/twitter-235-675852.png" width="90"></a></td>                      
    <td style="border: none;"><a alt='icon link to modevx email' href='mailto:ephraim@modevx.com' target='_blank'><img src="https://cdn.iconscout.com/icon/free/png-256/email-letter-envelope-message-38065.png" width="90"></a></td>  
    <td style="border: none;"><a alt='icon link to ephraim smiths linkedin account' href='https://linkedin.com/in/ephraimjsmith' target='_blank'><img src="https://cdn.iconscout.com/icon/free/png-256/linkedin-187-675833.png" width="90"></a></td>
    <td style="border: none;"><a alt='icon link to modevx instagram account' href='https://instagram.com/_modevx' target='_blank'><img src="https://cdn.iconscout.com/icon/free/png-256/instagram-2752153-2284970.png" width="90"></a></td>
  </tr>
</table>

<!-- #endregion /CONNECT -->

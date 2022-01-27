![alstr project hero](./repo_assets/readme_title.png)

<div align='center'>

| <h2>**RESEARCH**</h2>                                             | <h2>**DEVELOPMENT**</h2>                                                  |
| :---------------------------------------------------------------- | :------------------------------------------------------------------------ |
| :white_large_square: algo-trading strategies                      | <h2><strong>**_Backtesting_**</strong></h2>                               |
| :white_large_square: algo-trading architecture                    | :white_large_square: fetch historical stock market data                   |
| :white_large_square: market data sources                          | :white_large_square: store historical market data                         |
| :white_large_square: brokerage options                            | :white_large_square: backtest strategy using historical market data       |
| :white_large_square: cloud hosting options (capabilites vs. cost) | :white_large_square: generate backtesting P&L reports                     |
|                                                                   | <h2><strong>**_Forward Testing_**</strong></h2>                           |
|                                                                   | :white_large_square: stream real-time market data                         |
|                                                                   | :white_large_square: store real-time market data                          |
|                                                                   | :white_large_square: forward test strategy using real-time market data    |
|                                                                   | :white_large_square: generate forward testing P&L reports                 |
|                                                                   | <h2><strong>**_Run Strategy_**</strong></h2>                              |
|                                                                   | :white_large_square: run strategy against real-time market data           |
|                                                                   | :white_large_square: execute orders based on strategy entry/exit triggers |
|                                                                   | :white_large_square: send push notifications to assigned devices          |
|                                                                   | :white_large_square: generate P&L reports for executed orders             |
|                                                                   | <h2><strong>**_Strategy Management_**</strong></h2>                       |
|                                                                   | :white_large_square: desktop admin GUI                                    |
|                                                                   | :white_large_square: mobile admin GUI                                     |
|                                                                   | :white_large_square: web admin GUI                                        |

</div>

![alstr project resources](./repo_assets/readme_resources.png)

Alpaca trading [API](https://alpaca.markets/)

- Node.js [SDK](https://github.com/alpacahq/alpaca-trade-api-js)
- historical market data [methods](https://github.com/alpacahq/alpaca-trade-api-js#data-api)

Better Trading System

- [YouTube channel]()
- [podcast]()

Bloom Trading

- [Foundational Stock Trading Course]()
- [Advanced Stock Trading Course]()

[Interactive Brokers](https://www.interactivebrokers.com/en/home.php) Trading Platform

![alstr project resources](./repo_assets/readme_questions.png)

- [getBarsV2()](https://github.com/alpacahq/alpaca-trade-api-js/blob/e323991fa6fc0e629ffc52514a009f2a9b24ce31/lib/resources/datav2/rest_v2.ts#L241) returns AlpacaBar [AsyncGenerator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) via [function\*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) getBars()

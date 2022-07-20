
# Simple Javscript Example To Convert Ticker, Date And Symbol To Options Ticker for API Consumption

You can view and example here:
[Example HTML/JS](/example)

Simply pass the ticker, date (MM/DD/YYYY format), type (CALL or PUT) and strike price to the `genOptionsSymbol` function.


Example input:
```
genOptionsSymbol('AAPL', '07/22/2022', 'CALL', '180.00');
```

Output:
```
O:AAPL220722C00180000
```

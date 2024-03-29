---
title: PROPHET_PREDICT
description: Leverage Python's power in time series forecasting with Flojoy's PROPHET_PREDICT node that creates a forecast, identifies the trend components, and plots it in Plotly.
keywords: [AI, ML, Python, Predict, Time Series, Forecast, Trend, Plotly, Dataframe, DataContainer]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/AI_ML/PREDICT_TIME_SERIES/PROPHET_PREDICT/examples/EX1/output.jpeg
---

In this example, the `TIMESERIES` node generates random time series data. 

<!-- '<table border="1" class="dataframe">  <thead>   <tr style="text-align: right;">     <th></th>     <th>Timestamp</th>     <th>Data</th>  </tr>  </thead>  <tbody>    <tr>      <th>0</th>      <td>2023-01-01</td>      <td>-0.187903</td>    </tr>    <tr>      <th>1</th>      <td>2023-01-02</td>      <td>0.204290</td>    </tr>    <tr>      <th>2</th>      <td>2023-01-03</td>      <td>-0.659945</td>    </tr>  </tbody></table>' -->

This dataframe is then passed to the `PROPHET_PREDICT` node, with the default parameters of `run_forecast=True` and `periods=365`. This node trains a `Prophet` model and runs a prediction forecast over a 365 day period. 

It returns a `DataContainer` with the following:
* `type`: `dataframe`
* `m`: the forecasted dataframe
* `extra`: 
  * `run_forecast`: `True` (because that is what was passed in)
  * `prophet`: the trained `Prophet` model
  * `original`: the dataframe passed into the node

Finally, this is passed to the `PROPHET_PLOT` and `PROPHET_COMPONENTS` nodes. The forecast and trend components are then plotted in Plotly. Because a forecast was already run, the `PROPHET_PLOT` and `PROPHET_COMPONENTS` nodes will use the already predicted dataframe.
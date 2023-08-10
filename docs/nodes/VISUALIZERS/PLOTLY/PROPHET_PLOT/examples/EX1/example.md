---
title: PROPHET_PLOT
description: In this example, the TIMESERIES node generates random time series data. This dataframe is then passed to the PROPHET_PREDICT node, with the default parameters of run_forecast=True and periods=365. This node trains a Prophet model and runs a prediction forecast over a 365 day period. It returns a DataContainer.
keywords: [Python, Visualize, Plotly, Plotly Prophet Plot visualizer, Python time series visualization, Dynamic Prophet model insights, Plotly time series plot examples, Flojoy Plotly nodes, Interactive time series visualization, Python data visualization tools, Visualizing Prophet predictions, Time series analysis using Plotly, Prophet model visualization]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/VISUALIZERS/PLOTLY/PROPHET_PLOT/examples/EX1/output.jpeg
---

In this example, the `TIMESERIES` node generates random time series data. 

<!-- '<table border="1" class="dataframe">  <thead>   <tr style="text-align: right;">     <th></th>     <th>Timestamp</th>     <th>Data</th>  </tr>  </thead>  <tbody>    <tr>      <th>0</th>      <td>2023-01-01</td>      <td>-0.187903</td>    </tr>    <tr>      <th>1</th>      <td>2023-01-02</td>      <td>0.204290</td>    </tr>    <tr>      <th>2</th>      <td>2023-01-03</td>      <td>-0.659945</td>    </tr>  </tbody></table>' -->

This dataframe is then passed to the `PROPHET_PREDICT` node, with the default parameters
of `run_forecast=True` and `periods=365`. This node trains a `Prophet` model and runs a prediction
forecast over a 365 day period. 

It returns a `DataContainer` with the following:
* `type`: `dataframe`
* `m`: the forecasted dataframe
* `extra`: 
  * `run_forecast`: `True` (because that is what was passed in)
  * `prophet`: the trained `Prophet` model
  * `original`: the dataframe passed into the node

Finally, this is passed to the `PROPHET_PLOT` and `PROPHET_COMPONENTS` nodes. The forecast and trend components are then plotted in Plotly. Because a forecast was already run, the `PROPHET_PLOT` and `PROPHET_COMPONENTS` nodes will use the already predicted dataframe.
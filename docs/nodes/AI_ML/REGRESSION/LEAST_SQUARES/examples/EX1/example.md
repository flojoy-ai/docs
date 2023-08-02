In this example, the two `LINSPACE` nodes each generate an array of 300 samples.

One of the arrays is passed down to the `RAND` node, which randomizes the data points.

Two `ordered pairs` are passed down to the `LEAST_SQUARES` node, which calculates the coefficients that minimize the errors from all the data points. 

To simplify the plotting, the initial X matrix from the first `LINSPACE` is multiplied with the coefficients so that the line is drawn and can be passed as an `ordered pair` with X.

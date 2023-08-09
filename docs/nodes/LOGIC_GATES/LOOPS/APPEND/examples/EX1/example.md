<!--- Add SEO here --->

In this example, the `LINSPACE` and `RAND` nodes generate an `OrderedPair` with random y values. 

This array is then passed a loop which uses the `APPEND` node to append a new random y value to the `OrderedPair`.

The `SCATTER` node is updated with each loop, showing how the `APPEND` node works.

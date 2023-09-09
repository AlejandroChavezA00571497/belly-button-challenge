# belly-button-challenge
Module 14 Challenge for the Tec de Monterrey Data Analysis Bootcamp, Introduction to JavaScript

GitHub Pages site: https://alejandrochaveza00571497.github.io/belly-button-challenge/

JavaScript file that takes data relating to bacterial observations in people's navels from a URL in order to perform analysis and visualization of it, using the D3 and Plotly libraries.

app.js is the main file, it reads data from a URL and creates functions in order to display said data. The main functions are initialChart, that populates the site with an initial chart with the data from the first subject, barChart, that creates a horizontal bar chart with the results of the observed bacteria, bubbleChart, which creates bubble charts showing the amount of specific bacterias, and demographicInfo, which takes the subjects' demographic data and displays it in a table. There's also the optionChanged function, which is called inside the index.html file, in order to change the values of all the other charts when the subject is changed.

index.html is the file where the HTML for the site exists, and it connects with d3, plotly and the app.js file. This HTML file is also used to deploy a Github Pages site where the visualizations can be seen: https://alejandrochaveza00571497.github.io/belly-button-challenge/

The main directory of this project contains the index.html file, as well as a samples.json file, which the same information taken from the URL, just for reference. It also contains the static directory, which itself contains the app.js file where the code for the visualizations exists.

Contributions:
- Data Analysis Bootcamp Classes
- https://plotly.com/javascript/bar-charts/
- https://plotly.com/javascript/bubble-charts/
- https://www.dashingd3js.com/d3-tutorial/d3-json-data

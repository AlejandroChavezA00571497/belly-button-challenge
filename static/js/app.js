const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

//Console logging the data from the URL
d3.json(url).then(function(jsonData){
    console.log(jsonData)
})
//According to the result, we have names, metadata and samples as available arrays





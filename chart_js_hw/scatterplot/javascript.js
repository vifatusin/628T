var ctx = document.getElementById('myChart').getContext('2d');
var scatterChart = new Chart(ctx, {
   type: 'scatter',
   data: {
      labels: ["1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
      datasets: [{
         label: 'Year',
         data: [{x: 59, y: 420,}, {x: 105, y: 494}, {x: 78, y: 419,}, {x: 80, y: 337,}, {x: 56, y: 355,}, {x: 78, y: 396,}, {x: 94, y: 357,}, {x: 56, y: 286,}, {x: 76, y: 266,}, {x: 56, y: 281,}, {x: 67, y: 339,}, {x: 58, y: 264,}, {x: 47, y: 305,}, {x: 62, y: 317,}, {x: 36, y: 251,}, {x: 65, y: 238,}, {x: 50, y: 347,}, {x: 34, y: 250,}, {x: 45, y: 352,}, {x: 56, y: 278,}, {x: 42, y: 270,}, {x: 35, y: 267,}, {x: 48, y: 144,}, {x: 45, y: 183,}, {x: 37, y: 225,}, {x: 23, y: 152,}, {x: 10, y: 26,}, {x: 7, y: 20,}, {x: 3, y: 11}],
         borderColor: "#FF0000",
         backgroundColor: "#FF0000",
         borderWidth:2,
      }]
   },
   options: {
     title: {
       display: true,
       text: 'Aggravated Assault and Break & Entry Crime Rates in College Park from 1990 - 2018',
       fontSize: 20
     },
     subtitles: {
       display: true,
       text: 'Both aggravated assault and break and entry crime rates are lower in more recent years.',
       fontSize: 10
     },
     legend: {
       display: false
     },
     scales: {
       xAxes: [{
         scaleLabel: {
           display: true,
           labelString: 'Aggravated Assault'
         },
         gridLines: {
           display: true,
         }
       }],
       yAxes: [{
         scaleLabel: {
           display: true,
           labelString: 'Break & Entry'
         },
         gridLines: {
           display: true,
         }
       }]
     },
       tooltips: {
           callbacks: {
              label: function(tooltipItem, data) {
                 var label = data.labels[tooltipItem.index];
                 return label + ': (' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
              }
           }
        },
      }
    });

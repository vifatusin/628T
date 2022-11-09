var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
//type refers to the kind of chart.
   type: 'line',
   data: {
      //the labels are the going to be on the x axis.
       labels: ['1800',	'1825',	'1850',	'1875',	'1900',	'1925',	'1950',	'1975',	'2000',	'2021'],
       datasets: [{
          //this is going to be the title on the x axis.
            label: 'Brazil',
            data: [32,	32, 31.99, 32.06, 32.4, 32.75, 51.78, 63.65, 71.44, 76.33],
            borderColor: ['#00A2A2'],
            backgroundColor: ['#00A2A2'],
            tension: 0.1},
        {
            label: 'China',
            data: [32, 32, 32, 31.96, 31.75, 31.55, 40.73, 63.26, 70.03, 77.4],
            borderColor: ['#00A218'],
            backgroundColor: ['#00A218'],
            tension: 0.1},
        {
            label: 'India',
            data: [25.44, 25.44, 25.44, 25.11, 18.37, 26.69, 34.92, 51.51, 62.34, 69.77],
            borderColor: ['#A2008A'],
            backgroundColor: ['#A2008A'],
            tension: 0.1},
        {
            label: 'Indonesia',
            data: [30, 30, 30, 30.04, 30.24, 30.43, 37.16, 56.49, 67.27, 72.51],
            borderColor: ['#A25400'],
            backgroundColor: ['#A25400'],
            tension: 0.1},
        {
            label: 'United States',
            data: [39.41, 39.41, 39.41, 39.41, 48.92, 58.47, 68.07, 72.44, 76.9, 79.59],
            borderColor: ['#A20000'],
            backgroundColor: ['#A20000'],
            tension: 0.1},
        ],
   },
   options: {
       responsive: true,
       plugins: {
           title: {
               display: true,
               text: 'Life Expectancies for some of the Largest Countries begin to increase in 1925',
               font: {
                   size: 18
               }
           },
           subtitle: {
               display: true,
               text: 'The United States had a early start to the increase in 1875, and has the highest life expectancy with 79.59.'
           }
       },
       scales: {
           y: {
               beginAtZero: true,
           }
       },
   },
});

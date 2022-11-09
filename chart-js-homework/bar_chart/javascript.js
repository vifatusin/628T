var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
//type refers to the kind of chart.
   type: 'bar',
   data: {
      //the labels are the going to be on the x axis.
       labels: ['America', 'East Asia & Pacific', 'Europe & Central Asia', 'Middle East & North Africa', 'South Asia', 'Sub-Saharan Africa'],
       datasets: [{
           data: [18791.13, 14480.30, 20818.45, 13856.00, 2505.17, 2569.00],
           backgroundColor: ['#FFA500'],
           borderColor: [
             '#000'
           ],
           borderWidth: 2
       },
   ]
   },
   options: {
          responsive: true,
          plugins: {
              title: {
                  display: true,
                  text: 'GDP Per Capita By Region',
                  font: {
                      size: 18
                  }
              },
              subtitle: {
                  display: true,
                  text: 'Regions like Europe & Central Asia and America had healthier economies in comparison to regions like South Asia and Sub Saharan Africa.'
              }
          },
          scales: {
              y: {
                  beginAtZero: true
              }
          },
      },
  });

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart (ctx, {
  type: 'line',
  data: {
    labels: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
    datasets: [{
      yAxisID: 'A',
      type: 'bar',
      backgroundColor: ['rgba(255, 0, 0, 0.2)'],
      borderColor: ['rgba(255, 0, 0, 1)'],
      borderWidth: 1,
      label: 'Population',
      data: [26873, 27200, 27727, 30701, 30882, 31462, 31481, 32721, 32680, 32589, 32196]
    }, {
      yAxisID: 'B',
      type: 'line',
      label: 'No. of Larceny Theft',
      data: [904, 839, 744, 847, 831, 914, 768, 658, 297, 291, 170],
      borderColor: ['#000000'],
      backgroundColor: ['#000000'],
      lineTension: 0.1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Larceny Thefts Decrease as CP Population Rises',
        font: {size: 25}
      },
      subtitle: {
        display: true,
        text: 'This could be due to the implementation of the security operations center at the University of Maryland.'
      }
    },
    scales: {
      A: {
        type: 'linear',
        position: 'left',
        ticks: {beginAtZero: true, color: 'rgba(255, 0, 0, 1)'},
        grid: {display: false}
      },
      B: {
        type: 'linear',
        position: 'right',
        ticks: {beginAtZero: true, color: '#000000'},
        grid: {display: false}
      },
      x: {ticks: {beginAtZero: true}}
    },
  },
});

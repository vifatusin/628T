var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: [
              'Rape',
              'Robbery',
              'Aggravated Assault',
            ],
            datasets: [{
              label: 'Salisbury',
              data: [23, 105, 180],
              fill: true,
              backgroundColor: 'rgba(128, 0, 0, 0.2)',
              borderColor: 'rgb(128, 0, 0)',
              pointBackgroundColor: 'rgb(128, 0, 0)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(128, 0, 0)'
            }, {
              label: 'College Park',
              data: [11, 27, 23],
              fill: true,
              backgroundColor: 'rgba(255, 215, 0, 0.2)',
              borderColor: 'rgb(255, 215, 0)',
              pointBackgroundColor: 'rgb(255, 215, 0)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(255, 215, 0)'
            }, {
              label: 'Bowie',
              data: [6, 21, 48],
              fill: true,
              backgroundColor: 'rgba(56, 56, 56, 0.2)',
              borderColor: 'rgb(56, 56, 56)',
              pointBackgroundColor: 'rgb(56, 56, 56)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(56, 56, 56)'
            }
          ]
        },
        options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Crimes in Maryland College Towns',
                font: {
                  size: 25
                }
              },
              subtitle: {
                display: true,
                text: 'Salisbury had a high number of crimes committed in 2015, despite having a population of over 33,000, second highest out of the three towns. Bowie had over 58,000 and College Park had over 32,000.',
              }
            }
          }
        });

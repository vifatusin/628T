var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#ba2727",
                backgroundColor: "#ba2727",
                borderWidth:2,

              }, {
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#ff7e21",
                backgroundColor: "#ff7e21",
                borderWidth:2,

              }, {
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#baba27",
                backgroundColor:"#baba27",
                borderWidth:2,

              }, {
                data: [
                  {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "#40ba27",
                backgroundColor: "#40ba27",
                borderWidth:2,

              }, {
                data: [
                  {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "#27bab5",
                backgroundColor: "#27bab5",
                borderWidth:2,

              }, {
                data: [
                  {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "#275dba",
                backgroundColor: "#275dba",
                borderWidth:2,

              }, {
                data: [
                  {x: 62.6, y: 3366},
                ],
                label: "Pakistan",
                borderColor: "#6c27ba",
                backgroundColor: "#6c27ba",
                borderWidth:2,

              }, {
                data: [
                  {x: 65.8, y: 1632},
                ],
                label: "Bangladesh",
                borderColor: "#ba279f",
                backgroundColor: "#ba279f",
                borderWidth:2,

              }, {
                data: [
                  {x: 81.1, y: 32193},
                ],
                label: "Japan",
                borderColor: "#964B00",
                backgroundColor: "#964B00",
                borderWidth:2,

              },
            ]
          },
          options: {
            plugins: {
              title: {
                  display: true,
                  text: 'Some of the most populated countries are economically unhealthy',
                  font: {
                      size: 18
                  }
              },
              subtitle: {
                  display: true,
                  text: "Majority of those countries are located in East and South Asia.",
              }
            },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'Gross Domestic Product (GDP)'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life Expectancy'
                  }
              }
            }
          }
        });

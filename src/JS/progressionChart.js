import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('progressChart').getContext('2d');
  const progressionData = JSON.parse(document.getElementById('progressionData').textContent);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: progressionData.map(test => test.date),
      datasets: [{
        label: 'Score sur 20',
        data: progressionData.map(test => test.score),
        backgroundColor: '#E72025',
        borderRadius: 0,
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        datalabels: {
          color: 'white',
          anchor: 'end',
          align: 'top',
          formatter: (value) => (typeof value !== 'undefined' ? `${value}/20` : ''),
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 5,
            display: false
          },
          grid: {
            display: false
          },
          border: {
            display: true,
            color: '#000',
            width: 3
          }
        },
        x: {
          grid: {
            display: false
          },
          ticks: {
            color: '#082033'
          },
          border: {
            display: true,
            color: '#000',
            width: 3
          }
    
        }
      },
      responsive: true,
      maintainAspectRatio: false
    },
    plugins: [ChartDataLabels]
  });
});

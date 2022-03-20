import Chart from 'chart.js/auto';

export default class DoughnatChart {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector('.chart__canvas')
    this.colors = config.colors;
    this.gradients = [];
    this.data = config.data;
    this.context = this.canvas.getContext('2d');
    let temp = 0;
    let sum = this.data.reduce((p,c) => p + c, 0);
    for (let i = 0; i < 4; i++) {
      let y0 = Math.round(60*(1 - Math.sin(Math.PI / 2 - temp * 2 * Math.PI/ sum )));
      temp += this.data[i];
      let y1 = Math.round(60*(1 - Math.sin(Math.PI / 2 - temp * 2 * Math.PI/ sum )));
      if (Math.PI / 2 - temp * 2 * Math.PI/ sum < - Math.PI / 2 &&
      Math.PI / 2 - (temp - this.data[i]) * 2 * Math.PI/ sum > - Math.PI / 2) {
        y0 = Math.min(y0, y1);
        y1 = 120;
      }
      this.gradients.push(this.context.createLinearGradient(60, Math.min(y0, y1), 60, Math.max(y0, y1)));
      this.gradients[i].addColorStop(0, this.colors[i][0]);
      this.gradients[i].addColorStop(1, this.colors[i][1]);
    }
    this.chart = new Chart(this.canvas, {
      type: 'doughnut',
      data: {
        datasets: [{
          borderAlign: 'inner',
          hoverBorderColor: 'white',
          label: 'My First Dataset',
          data: this.data,
          backgroundColor: [
            this.gradients[0],
            this.gradients[1],
            this.gradients[2],
            this.gradients[3],
          ],
          borderWidth: 1,
        }]
      },
      options: {   
        plugins: {
          legend: {
            display: false,
            labels: {
              usePointStyle: true,
              boxWidth: 10,
              font: {
                size: 14,
              },
              backgroundColor: 'blue',         
            },
            position: 'right',
            align: 'end',
          },
        },
        events: null,
        datasetRadiusBuffer: 50,
        cutout: 53,
        responsive: true,
        maintainAspectRatio: false,
      },
    
    });
    this.element.querySelector('.chart__number').innerText = config.votes;
  }
}
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    new Chart('ventasDeLaSemana', {
      type: 'bar',
      data: {
        labels: ['Lun.', 'Mar.', 'Mie.', 'Jue.', 'Vie.', 'Sab.', 'Dom.'],
        datasets: [
          {
            label: 'Ventas de la semana',
            data: [12, 19, 5, 7, 9, 4, 8],
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(155, 59, 164, 0.8)',
            ],
          },
        ],
      },
    });

    new Chart('ventasDelMes', {
      type: 'bar',
      data: {
        labels: ['Semana 1', 'Semana 2', ' Semana 3', 'Semana 4'],
        datasets: [
          {
            label: 'Ventas del mes',
            data: [12, 19, 5, 7],
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
            ],
          },
        ],
      },
    });
  }
}

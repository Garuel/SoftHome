import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-dashboard',
  templateUrl: './pagina-dashboard.component.html',
  styleUrls: [
    './pagina-dashboard.component.css',
  ],
})
export class PaginaDashboardComponent implements OnInit {

  chart: any;

  generateRandomData = (k:number) => {
		var X, day=0, month=0, year=2018 , y  = 1000, dps = [];
		for(var i = 0; i < 100; i++) {
			y += Math.ceil(Math.random() * k - (k*0.35));
      X = new Date(year,month,day);
      if(day>28){
        month =month+1;
        day=0;
      }
      if(month>11){
        year = year+1;
      }
      day=day+1;
			dps.push({x: X , y: y});
		}
		return dps;
	}

	Descargas = {
	  theme: "light2",
	  title: {
		text: "Descargas diarias"
	  },
	  data: [{
		type: "line",
		dataPoints: this.generateRandomData(1000)
    }]
	}

  Ventas = {
	  theme: "light2",
	  title: {
		text: "Ventas diarias"
	  },
	  data: [{
		type: "line",
		dataPoints: this.generateRandomData(80)
    }]
	}

  Interacciones = {
	  theme: "light2",
	  title: {
		text: "Interacciones diarias"
	  },
	  data: [{
		type: "line",
		dataPoints: this.generateRandomData(10000)
    }]
	}
	
	VentasPorJuego = {
	  animationEnabled: true,
	  theme: "light2",
	  title:{
		text: "Ventas por juego"
	  },
	  axisX:{
		valueFormatString: "D MMM"
	  },
	  axisY: {
		title: "Ventas"
	  },
	  toolTip: {
		shared: true
	  },
	  legend: {
		cursor: "pointer",
		itemclick: function (e: any) {
			if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
				e.dataSeries.visible = false;
			} else {
				e.dataSeries.visible = true;
			} 
			e.chart.render();
		}
	  },
	  data: [{
		type: "line",
		showInLegend: true,
		name: "Juego 1",
		xValueFormatString: "MMM DD, YYYY",
		dataPoints: [
			{ x: new Date(2021, 8, 1), y: 63 },
			{ x: new Date(2021, 8, 2), y: 69 },
			{ x: new Date(2021, 8, 3), y: 65 },
			{ x: new Date(2021, 8, 4), y: 70 },
			{ x: new Date(2021, 8, 5), y: 71 },
			{ x: new Date(2021, 8, 6), y: 65 },
			{ x: new Date(2021, 8, 7), y: 73 },
			{ x: new Date(2021, 8, 8), y: 86 },
			{ x: new Date(2021, 8, 9), y: 74 },
			{ x: new Date(2021, 8, 10), y: 75 },
			{ x: new Date(2021, 8, 11), y: 76 },
			{ x: new Date(2021, 8, 12), y: 84 },
			{ x: new Date(2021, 8, 13), y: 87 },
			{ x: new Date(2021, 8, 14), y: 76 },
			{ x: new Date(2021, 8, 15), y: 79 }
		]
	  }, {
		type: "line",
		showInLegend: true,
		name: "Juego 2",
		dataPoints: [
			{ x: new Date(2021, 8, 1), y: 60 },
			{ x: new Date(2021, 8, 2), y: 57 },
			{ x: new Date(2021, 8, 3), y: 51 },
			{ x: new Date(2021, 8, 4), y: 56 },
			{ x: new Date(2021, 8, 5), y: 54 },
			{ x: new Date(2021, 8, 6), y: 55 },
			{ x: new Date(2021, 8, 7), y: 54 },
			{ x: new Date(2021, 8, 8), y: 69 },
			{ x: new Date(2021, 8, 9), y: 65 },
			{ x: new Date(2021, 8, 10), y: 66 },
			{ x: new Date(2021, 8, 11), y: 63 },
			{ x: new Date(2021, 8, 12), y: 67 },
			{ x: new Date(2021, 8, 13), y: 66 },
			{ x: new Date(2021, 8, 14), y: 56 },
			{ x: new Date(2021, 8, 15), y: 64 }
		]
	  }]
	}	

  ngOnInit(): void {}
}

var chart = document.getElementById('polarAreaChart');
console.log(chart);
var polarAreaChart = new Chart(chart, {
	data: {
		datasets: [{
        data: [10, 20, 30],
		backgroundColor: ["rgba(255,0,0,0.6)","rgba(0,255,0,0.6)","rgba(0,0,255,0.6)"],
		}],

		// These labels appear in the legend and in the tooltips when hovering different arcs
		labels: [
			'Red',
			'Green',
			'Blue'
		]
	},
	type: 'polarArea'
	
	
});
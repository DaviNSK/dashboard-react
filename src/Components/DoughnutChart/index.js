import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
	labels: [
		'Blue',
		'Dark Green',
		'Green'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'rgba(43,182,201,1)',
		'#077269',
		'rgba(0,255,171,1)'
		],
		hoverBackgroundColor: [
		'rgba(43,182,201,1)',
		'#077269)',
		'rgba(0,255,171,1)'
		]
	}]
};

export default function DoughnutChart() {
    return (
      <div>
        <Doughnut data={data} />
      </div>
    );
  }
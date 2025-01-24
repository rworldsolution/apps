import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function ProductChart(props) {
    const options = {
        chart: {
          type: 'pie',
          height: 150,
        },
        title: {
          text: '',
        },
        credits: {
            enabled: false
        },
        plotOptions: {
          pie: {
            innerSize: '70%', 
            dataLabels: {
              enabled: false,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            },
          },
        },
        series: [
          {
            name: 'Invoices',
            colorByPoint: true,
            data: [
              {
                name: 'Invoiced',
                y: 129,
                color: '#4285F4', 
              },
              {
                name: 'Received',
                y: 20,
                color: '#e8eaea', 
              },
            ],
          },
        ],
      };
  return (
    <>
                <HighchartsReact highcharts={Highcharts} options={options} />     
    </>
  )
}

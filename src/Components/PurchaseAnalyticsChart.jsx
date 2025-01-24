import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function PurchaseAnalyticsChart(props) {
    const chartOptions = {
        chart: {
          type: 'column',
          height: 300,
        },
        title: {
          text: '',
        },
        credits: {
            enabled: false
        }, 
        xAxis: {
          categories: props.categories.map(e=> e.slice(0,3)),
          title: {
            text: 'Days',
          },
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Amount',
          },
        },
        legend: {
          align: 'right',
          verticalAlign: 'top',
          layout: 'horizontal',
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
          },
        },
        series: [
          {
            name: 'Sales',
            data: props.lists,
            color: '#4CAF50', // Green
          },
          {
            name: 'Purchase',
            data: props.list,
            color: '#FFC107', // Yellow
          },
        ],
      };

  return (
    <>
    <div className='box'>
         <p className="content_heding">{props.name}</p>
        
         <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
    </>
  )
}

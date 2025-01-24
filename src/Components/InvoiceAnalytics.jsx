import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function InvoiceAnalytics(props) {
    const options = {
        chart: {
          type: 'pie',
          height: 200,
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
                y: 109,
                color: '#AECBFA', 
              },
              {
                name: 'Pending',
                y: 29,
                color: '#B4D9F5', 
              },
            ],
          },
        ],
      };
  return (
    <>
    <div className='box'>
             <p className="content_heding">{props.name}</p>
             <div className='row align-items-center'>
                <div className='col-sm-6'>
                <HighchartsReact highcharts={Highcharts} options={options} />
                </div>
                <div className='col-sm-6'>
                <p className="mb-0 fs-12 d-flex align-items-center">
                <span className="bade_primary2"></span> 
                <span className="fw-700 pe-5">29</span>
                <span className="fw-500">Pending</span></p>
                <p className="mb-0 fs-12 d-flex align-items-center my-5">
                    <span className="bade_primary1"></span> 
                    <span className="fw-700 pe-5">109</span>
                    <span className="fw-500">Received</span></p>
                    <p className="mb-0 fs-12 d-flex align-items-center">
                        <span className="bade_primary2"></span> 
                        <span className="fw-700 pe-5">29</span>
                        <span className="fw-500">Pending</span></p>
                </div>
             </div>
        </div>
    </>
  )
}

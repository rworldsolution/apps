import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const SalesAnalyticsChart = (props) => {
  const options = {
    chart: {
      type: "line",
      height: 300,
    },
    title: {
      text: "",
    },
    credits: {
        enabled: false
    },    
    xAxis: {
      categories: [
        "Jul 24", "Aug 24", "Sep 24", "Oct 24", "Nov 24", "Dec 24",
        "Jan 25", "Feb 25", "Mar 25", "Apr 25", "May 25", "Jun 25",
      ],
      title: {
        text: "Month",
      },
      
    },
    yAxis: {
      title: {
        text: "Sales",
      },
      min: 0,
      max: 500,
    },
    tooltip: {
      formatter: function () {
        return `<b>${this.y} Sales</b><br>${this.x}`;
      },
    },
    series: [
      {
        name: "Sales",
        data: [200, 300, 400, 350, 280, 450, 380, 320, 250, 200, 150, 60],
        color: "#007bff",
      },
    ],
  };

  return (
    <>
    <div className="box">
        <p className="content_heding">{props.name}</p>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
    </>
  );
};

export default SalesAnalyticsChart;

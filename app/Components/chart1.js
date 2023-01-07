'use client'

import Chart from "chart.js";
import { useEffect } from "react";


export default function Chart1({height=170}) {
    useEffect(() => {
        var config = {
            type: "bar",
            data: {
              labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              datasets: [
                {
                  label: "Sales",
                  tension: 0.4,
                  borderWidth: 0,
                  borderRadius: 4,
                  borderSkipped: false,
                  backgroundColor: "#fff",
                  data: [450, 200, 100, 220, 500, 100, 400, 230, 500],
                  maxBarThickness: 6,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              interaction: {
                intersect: false,
                mode: "index",
              },
              scales: {
                y: {
                  grid: {
                    drawBorder: false,
                    display: false,
                    drawOnChartArea: false,
                    drawTicks: false,
                  },
                  ticks: {
                    suggestedMin: 0,
                    suggestedMax: 600,
                    beginAtZero: true,
                    padding: 15,
                    font: {
                      size: 14,
                      family: "Open Sans",
                      style: "normal",
                      lineHeight: 2,
                    },
                    color: "#fff",
                  },
                },
                x: {
                  grid: {
                    drawBorder: false,
                    display: false,
                    drawOnChartArea: false,
                    drawTicks: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              },
            },
          };
          var ctx = document.getElementById("line-chart1").getContext("2d");
          window.myLine1 = new Chart(ctx, config);
    }, [])
    
    return (
        <canvas id="line-chart1" height={height}></canvas>
    )
}
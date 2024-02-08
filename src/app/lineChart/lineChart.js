'use client'
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function LineChart1() {
    const canvasEl = useRef(null);

    const colors = {
        purple: {
            default: "rgb(76,97,233)",
            half: "rgba(76,84,233,0.5)",
            quarter: "rgba(76,84,233,0.25)",
            zero: "rgba(149, 76, 233, 0)"
        },
        indigo: {
            default: "rgba(80, 102, 120, 1)",
            quarter: "rgba(80, 102, 120, 0.25)"
        }
    };

    useEffect(() => {
        const ctx = canvasEl.current.getContext("2d");
        // const ctx = document.getElementById("myChart");

        const gradient = ctx.createLinearGradient(0, 160, 200, 40000,);
        gradient.addColorStop(0, colors.purple.half);
        gradient.addColorStop(0.60, colors.purple.quarter);
        gradient.addColorStop(0.5, colors.purple.zero);

        const weight = [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000];

        const labels = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];
        const data = {
            labels: labels,
            datasets: [
                {
                    data: weight,
                    fill: false,
                    borderWidth: 2,
                    borderColor: colors.purple.default,
                    lineTension: 0.9,
                    pointRadius: 3
                }
            ]
        };
        const config = {
            type: "line",
            data: data
        };
        const myLineChart = new Chart(ctx, config);

        return function cleanup() {
            myLineChart.destroy();
        };
    });

    return (
        <div className="App">
            <span>Chart.js Demo</span>
            <canvas id="myChart" ref={canvasEl} height="100" />
        </div>
    );
}
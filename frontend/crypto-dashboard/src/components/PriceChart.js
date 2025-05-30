import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from 'chart.js';

// Register required Chart.js components
Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

// This component renders a line chart of the selected coin's price trend
const PriceChart = ({ chartData }) => {
    // Don’t render anything if there’s no data
    if (!chartData || chartData.length === 0) return null;

    // Prepare chart data
    const data = {
        labels: chartData.map((point) =>
            new Date(point[0]).toLocaleDateString()
        ), // x-axis: date
        datasets: [
            {
                label: 'Price (USD)',
                data: chartData.map((point) => point[1]), // y-axis: price
                fill: false,
                borderColor: 'blue',
                tension: 0.3,
            },
        ],
    };

    return (
        <div style={{ marginTop: '2rem' }}>
            <h3>7-Day Price Chart</h3>
            <Line data={data} />
        </div>
    );
};

export default PriceChart;

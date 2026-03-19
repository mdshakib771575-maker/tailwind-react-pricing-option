import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resutData = [
  {
    "id": 1,
    "name": "Rahim",
    "bangla": 82,
    "english": 75,
    "math": 90,
    "science": 85
  },
  {
    "id": 2,
    "name": "Karim",
    "bangla": 78,
    "english": 70,
    "math": 88,
    "science": 80
  },
  {
    "id": 3,
    "name": "Shakib",
    "bangla": 90,
    "english": 85,
    "math": 95,
    "science": 92
  },
  {
    "id": 4,
    "name": "Hasan",
    "bangla": 76,
    "english": 72,
    "math": 84,
    "science": 79
  },
  {
    "id": 5,
    "name": "Jamal",
    "bangla": 88,
    "english": 81,
    "math": 91,
    "science": 87
  },
  {
    "id": 6,
    "name": "Kamal",
    "bangla": 69,
    "english": 74,
    "math": 80,
    "science": 77
  }
]

const ResultChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resutData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={"math"}></Line>
                <Line dataKey={"bangla"} stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;
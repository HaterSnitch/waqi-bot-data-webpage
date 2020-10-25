import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';
import '../App.css';

const data = [
  {
    name: 'Msg 1', neg: -45, pov: 55
  },
  {
    name: 'Msg 2', neg: 0, pov: 65
  },
  {
    name: 'Msg 3', neg: -79, pov: 32
  },
  {
    name: 'Msg 4', neg: -97, pov: 9
  },
];

export default class Graph extends PureComponent {
  render() {
    return (
      <BarChart
        width={800}
        height={350}
        data={data}
        stackOffset="sign"
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
        className="ml-graph"
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="pov" fill="#8884d8" stackId="stack" />
        <Bar dataKey="neg" fill="#82ca9d" stackId="stack" />
      </BarChart>
    );
  }
}

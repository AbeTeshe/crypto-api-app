import React from 'react';
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import {Col, Row, Typography} from 'antd';
 
//import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const {Title} = Typography;

const LineChart = ({coinHistory, currentPrice, coinName}) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
        coinPrice.push(coinHistory?.data?.history[i].price);
    }

    for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
    }
    // console.log(coinTimestamp);
    // console.log(coinPrice);

    const data = {
        labels: coinTimestamp,
        datasets: [
          {
            label: 'Price In USD',
            data: coinPrice,
            fill: false,
            backgroundColor: '#0071bd',
            borderColor: '#0071bd',
            borderWidth: 1,
          },
        ]
      }
    
      const options = {
        scales: {
          YAxis: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
      };

    // const data = [
    //   {
    //     "name": coinTimestamp[0],
    //     "coin": coinPrice[0]
    //   },
    //   {
    //     "name": coinTimestamp[1],
    //     "coin": coinPrice[1]
    //   },
    //   {
    //     "name": coinTimestamp[2],
    //     "coin": coinPrice[2]
    //   },
    //   {
    //     "name": coinTimestamp[3],
    //     "coin": coinPrice[3]
    //   },
    //   {
    //     "name": coinTimestamp[4],
    //     "coin": coinPrice[4]
    //   },{
    //     "name": coinTimestamp[5],
    //     "coin": coinPrice[5]
    //   }
    // ];

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      {/* <ResponsiveContainer width="100%" aspect={4 /1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd"/>
          <Line type="monotone" dataKey="coin" stroke="#5550bd"/>
          <Tooltip />
        </LineChart>
      </ResponsiveContainer> */}
      <Line data={data} options={options} />
    </>
  )
}

export default LineChart;
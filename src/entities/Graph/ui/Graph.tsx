import { IFullRequest } from '@shared/libs/interfaces';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React, { FC } from 'react';
import { Pie } from 'react-chartjs-2';
import styles from './Graph.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

interface IGraph {
  requests: IFullRequest[];
}

interface IData {
  [type: string]: number;
}

const Graph: FC<IGraph> = ({ requests }) => {
  const data: IData = {};

  const types = new Set<string>();
  requests.forEach(({ type }) => types.add(type));
  types.forEach(type => (data[type] = 0));

  requests.forEach(({ type }) => data[type]++);

  const dataset = {
    labels: Object.keys(data),
    datasets: [
      {
        label: 'Число заявок',
        data: Object.values(data),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  return <Pie data={dataset} className={styles.graph} />;
};

export { Graph };

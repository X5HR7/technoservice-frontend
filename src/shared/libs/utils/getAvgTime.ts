import { IRequest } from '@shared/libs/interfaces';
import { subtractDates } from '@shared/libs/utils/subtractDates.ts';

export const getAvgTime = (requests: IRequest[]): string => {
  const avgTimes: Array<number> = [];

  requests.forEach(({ completedAt, createdAt }) => {
    if (completedAt && createdAt) {
      avgTimes.push(subtractDates(createdAt, completedAt));
    }
  });

  const sum = avgTimes.reduce((currentSum, currentNumber) => currentSum + currentNumber, 0);
  if (sum) {
    return (sum/avgTimes.length).toFixed(0).toString();
  }

  return '-';
};

import { Graph } from '@entities/Graph';
import { StatItem } from '@entities/StatItem';
import { useGetStatsQuery } from '@features/request/request-api.slice.ts';
import { IFullRequest } from '@shared/libs/interfaces';
import { getAvgTime } from '@shared/libs/utils/getAvgTime.ts';
import { Spinner } from '@shared/ui';
import { Header } from '@widgets/Header';
import React, { FC } from 'react';
import styles from './StatisticsPage.module.scss';


const StatisticsPage: FC = () => {
  const { data: requests, isLoading } = useGetStatsQuery<{
    data: IFullRequest[];
    isLoading: boolean;
  }>(null);

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        {isLoading ? (
          <Spinner size={'large'} />
        ) : (
          <>
            <section className={styles.content}>
              <h2 className={styles.title}>Общая статистика</h2>
              <ul className={styles.stats}>
                <StatItem title={'Число заявок всего:'} value={requests?.length?.toString()} />
                <StatItem
                  title={'Заявок обработано:'}
                  value={requests?.filter(request => request.completedAt)?.length?.toString()}
                />
                <StatItem
                  title={'Среднее время выполнения заявки в днях:'}
                  value={`${getAvgTime(requests)}`}
                />
              </ul>
            </section>
            <section className={styles.content}>
              <h2 className={styles.title}>Статистика по типам неисправностей</h2>
              <Graph requests={requests} />
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export { StatisticsPage };

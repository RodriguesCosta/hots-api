import React, { useState } from 'react';

import { Stats } from '../../@types/heroes';

import {
  statisticType,
  Container,
  ContainerStatistic,
  StatisticImage,
  StatisticName,
  ContainerBars,
  StatisticBars,
} from './styles';

interface HeroStatsProps {
  stats: Stats;
}

const HeroStats: React.FC<HeroStatsProps> = ({ stats }) => {
  const [damageStatistic] = useState(() => {
    const tmpArray: statisticType[] = [];

    for (let itmp = 0; itmp < Number(stats.damage); itmp++) {
      tmpArray.push('damage');
    }

    while (tmpArray.length < 10) {
      tmpArray.push('');
    }

    return tmpArray;
  });

  const [utilityStatistic] = useState(() => {
    const tmpArray: statisticType[] = [];

    for (let itmp = 0; itmp < Number(stats.utility); itmp++) {
      tmpArray.push('utility');
    }

    while (tmpArray.length < 10) {
      tmpArray.push('');
    }

    return tmpArray;
  });

  const [survivabilityStatistic] = useState(() => {
    const tmpArray: statisticType[] = [];

    for (let itmp = 0; itmp < Number(stats.survivability); itmp++) {
      tmpArray.push('survivability');
    }

    while (tmpArray.length < 10) {
      tmpArray.push('');
    }

    return tmpArray;
  });

  const [complexityStatistic] = useState(() => {
    const tmpArray: statisticType[] = [];

    for (let itmp = 0; itmp < Number(stats.complexity); itmp++) {
      tmpArray.push('complexity');
    }

    while (tmpArray.length < 10) {
      tmpArray.push('');
    }

    return tmpArray;
  });

  return (
    <Container>
      <ContainerStatistic>
        <StatisticImage src="/assets/damage.png" />
        <ContainerBars>
          <StatisticName>DANO</StatisticName>
          <ContainerStatistic>
            {damageStatistic.map((value, index) => (
              <StatisticBars key={`${value}${index}`} statisticType={value} />
            ))}
          </ContainerStatistic>
        </ContainerBars>
      </ContainerStatistic>

      <ContainerStatistic>
        <StatisticImage src="/assets/utility.png" />
        <ContainerBars>
          <StatisticName>UTILIDADE</StatisticName>
          <ContainerStatistic>
            {utilityStatistic.map((value, index) => (
              <StatisticBars key={`${value}${index}`} statisticType={value} />
            ))}
          </ContainerStatistic>
        </ContainerBars>
      </ContainerStatistic>

      <ContainerStatistic>
        <StatisticImage src="/assets/utility.png" />
        <ContainerBars>
          <StatisticName>SOBREVIVÊNCIA</StatisticName>
          <ContainerStatistic>
            {survivabilityStatistic.map((value, index) => (
              <StatisticBars key={`${value}${index}`} statisticType={value} />
            ))}
          </ContainerStatistic>
        </ContainerBars>
      </ContainerStatistic>

      <ContainerStatistic>
        <StatisticImage src="/assets/complexity.png" />
        <ContainerBars>
          <StatisticName>COMPLEXIDADE</StatisticName>
          <ContainerStatistic>
            {complexityStatistic.map((value, index) => (
              <StatisticBars key={`${value}${index}`} statisticType={value} />
            ))}
          </ContainerStatistic>
        </ContainerBars>
      </ContainerStatistic>
    </Container>
  );
};

export default HeroStats;

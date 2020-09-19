import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 10px;
  padding: 10px;
  flex-direction: column;
  background-color: #12092c;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#0e0520),
    to(#1b1146)
  );
  background: linear-gradient(0deg, #0e0520, #1b1146);
`;

export const ContainerStatistic = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StatisticImage = styled.img`
  display: flex;
  width: 75px;
  height: 75px;
`;

export const StatisticName = styled.span`
  display: flex;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const ContainerBars = styled.div`
  display: flex;
  flex-direction: column;
`;

export type statisticType =
  | 'damage'
  | 'utility'
  | 'survivability'
  | 'complexity'
  | '';

interface StatisticBarsProps {
  statisticType?: statisticType;
}

export const StatisticBars = styled.div<StatisticBarsProps>`
  display: flex;
  width: 15px;
  height: 8px;
  margin-right: 5px;
  background: #3a2d57;

  ${(props) =>
    props.statisticType === 'damage' &&
    css`
      background: #ff77fd;
    `}

  ${(props) =>
    props.statisticType === 'utility' &&
    css`
      background: #a27ce7;
    `}

  ${(props) =>
    props.statisticType === 'survivability' &&
    css`
      background: #a27ce7;
    `}

  ${(props) =>
    props.statisticType === 'complexity' &&
    css`
      background: #57ddff;
    `}
`;

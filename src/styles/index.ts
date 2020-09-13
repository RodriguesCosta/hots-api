import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  background: #1b1146;
  display: flex;
  max-width: 100vw;
  flex-direction: column;
  align-items: center;
`;

export const LogoHeroes = styled.img.attrs(() => ({
  src: '/assets/logo-heroes.png',
}))`
  display: flex;
  width: auto;
  height: 200px;
`;

export const ContainerRow = styled.div`
  width: 95vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;

  div {
    display: flex;
    align-items: center;
  }
`;

export const ContainerScroll = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ContainerFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const FilterTitle = styled.h3`
  display: flex;
  color: #fff;
  margin: 0;
  font-size: 18px;
`;

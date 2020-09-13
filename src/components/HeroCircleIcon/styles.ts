import styled, { css } from 'styled-components';

interface ContainerProps {
  isFiltered?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100px;
  height: 161px;
  margin: 10px 10px 0px 10px;
  flex-direction: column;

  ${(props) =>
    props.isFiltered &&
    css`
      opacity: 0.5;
    `}
`;

export const ContainerImage = styled.div`
  position: relative;
`;

export const ImageHero = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  border: 2px solid #ff000070;
  box-sizing: border-box;
`;

export const HeroName = styled.h3`
  text-align: center;
  color: #fff;
  font-size: 16px;
`;

export const ImageFreeRotation = styled.img.attrs(() => ({
  src: '/assets/hots-freetoplay.png',
}))`
  width: 32px;
  height: 35px;
  position: absolute;
  bottom: -2px;
  right: -8px;
`;

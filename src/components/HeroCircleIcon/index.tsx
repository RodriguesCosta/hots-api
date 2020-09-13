import React from 'react';

import { HeroData } from '../../@types/heroes';

import {
  Container,
  ContainerImage,
  ImageHero,
  HeroName,
  ImageFreeRotation,
} from './styles';

interface HeroCircleIconProps {
  heroData: HeroData;
}

const HeroCircleIcon: React.FC<HeroCircleIconProps> = ({ heroData }) => {
  return (
    <Container isFiltered={heroData.isFiltered}>
      <ContainerImage>
        <ImageHero src={heroData.circleIcon}></ImageHero>
        {heroData.isInRotation && <ImageFreeRotation />}
      </ContainerImage>
      <HeroName>{heroData.name}</HeroName>
    </Container>
  );
};

export default HeroCircleIcon;

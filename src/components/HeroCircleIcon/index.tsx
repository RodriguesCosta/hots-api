import React, { memo } from 'react';

import Link from 'next/link';
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
    <Link href={`/heroes/${heroData.slug}`}>
      <Container isFiltered={heroData.isFiltered}>
        <ContainerImage>
          <ImageHero src={heroData.circleIcon}></ImageHero>
          {heroData.isInRotation && <ImageFreeRotation />}
        </ContainerImage>
        <HeroName>{heroData.name}</HeroName>
      </Container>
    </Link>
  );
};

export default memo(HeroCircleIcon);

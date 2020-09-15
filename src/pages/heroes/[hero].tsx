import React from 'react';

import { NextPage, GetServerSideProps } from 'next';

import { HeroData } from '../../@types/heroes';

import api from '../../services/api';
import { Container, HeaderData } from '../../styles/heroes/hero';

interface PageProps {
  heroData: HeroData;
}

export const getServerSideProps: GetServerSideProps = async (req) => {
  try {
    const { hero } = req.query;

    const { data } = await api.get(`api/heroes/${hero}`);

    return {
      props: {
        heroData: data,
      },
    };
  } catch (err) {
    console.error(err);
  }
};

const HeroPage: NextPage<PageProps> = ({ heroData }) => {
  return (
    <Container>
      <img
        src={`https://static.heroesofthestorm.com/heroes/${heroData.slug}/skins/${heroData.skin.slug}.jpg`}
        alt={heroData.name}
      />

      <HeaderData>
        <img
          src={`/assets/${heroData.franchise}.png`}
          alt={heroData.franchise}
        />
        <h1>{heroData.name}</h1>
      </HeaderData>
    </Container>
  );
};

export default HeroPage;

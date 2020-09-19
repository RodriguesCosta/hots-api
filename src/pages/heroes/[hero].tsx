import React from 'react';

import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

import { HeroData } from '../../@types/heroes';

import api from '../../services/api';
import { Container, HeaderData } from '../../styles/heroes/hero';

interface PageProps {
  heroData: HeroData;
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { hero } = context.params;

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

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('/api/heroes-simple-list');

  const paths = data.heroes.map((hero) => {
    return {
      params: { hero: hero.slug },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
};

const HeroPage: NextPage<PageProps> = ({ heroData }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  return (
    <Container>
      <section>
        <img
          src={`https://static.heroesofthestorm.com/heroes/${heroData.slug}/skins/${heroData.skin.slug}.jpg`}
          alt={heroData.name}
        />
      </section>

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

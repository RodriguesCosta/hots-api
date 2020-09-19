import React from 'react';

import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { HeroData } from '../../@types/heroes';

import api from '../../services/api';
import { Container, HeaderData, HeroType } from '../../styles/heroes/hero';

import HeroStats from '../../components/HeroStats';

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
    <>
      <Head>
        <title>
          HOTS - {heroData.name} - {heroData.franchise}
        </title>
      </Head>

      <Container>
        <section>
          <img
            src={`https://static.heroesofthestorm.com/heroes/${heroData.slug}/skins/${heroData.skin.slug}.jpg`}
            alt={heroData.name}
          />

          <HeaderData>
            <div className="row">
              <img
                src={`/assets/${heroData.franchise}.png`}
                alt={heroData.franchise}
              />
              <div>
                <h1>{heroData.name}</h1>
                <span>{heroData.title}</span>
              </div>
            </div>
            <p>{heroData.description}</p>
          </HeaderData>
        </section>

        <div className="row">
          <HeroStats stats={heroData.stats} />

          <HeroType></HeroType>
        </div>
      </Container>
    </>
  );
};

export default HeroPage;

import React, { useEffect, useState, useCallback } from 'react';

import { NextPage, GetServerSideProps } from 'next';

import { HeroData } from '../@types/heroes';
import HeroCircleIcon from '../components/HeroCircleIcon';

import All from '../../public/assets/all.svg';
import Tank from '../../public/assets/tank.svg';
import Bruiser from '../../public/assets/bruiser.svg';
import Support from '../../public/assets/support.svg';
import Healer from '../../public/assets/healer.svg';
import Rangedassassin from '../../public/assets/ranged-assassin.svg';
import Meleeassassin from '../../public/assets/melee-assassin.svg';

import Warcraft from '../../public/assets/warcraft.svg';
import Starcraft from '../../public/assets/starcraft.svg';
import Diablo from '../../public/assets/diablo.svg';
import Overwatch from '../../public/assets/overwatch.svg';
import Retro from '../../public/assets/retro.svg';

import api from '../services/api';
import {
  Container,
  ContainerRow,
  ContainerScroll,
  ContainerFilter,
  FilterButton,
  FilterTitle,
  LogoHeroes,
} from '../styles/index';

interface PageProps {
  heroesData: HeroData[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await api.get('api/heroes-simple-list');

    return {
      props: {
        heroesData: data.heroes,
      },
    };
  } catch (err) {
    console.error(err);
  }
};

export const Home: NextPage<PageProps> = ({ heroesData }) => {
  const [listHerosShow, setListHerosShow] = useState<HeroData[]>([]);

  const [roles] = useState([
    'all:Todos',
    'tank:Tanque',
    'bruiser:Guerreiro',
    'support:Suporte',
    'healer:Curandeiro',
    'ranged-assassin:Assassino de Longo Alcance',
    'melee-assassin:Assassino Corpo a Corpo',
  ]);

  const [universes] = useState([
    'all:Todos',
    'warcraft:Warcraft',
    'starcraft:StarCraft',
    'diablo:Diablo',
    'overwatch:Overwatch',
    'retro:Retro',
  ]);

  /* useEffect(() => {
    async function loadDataApi() {
      try {
        const { data } = await api.get('api/heroes-simple-list');
        setListHeros(data.heroes);
      } catch (err) {
        console.error(err);
      }
    }

    loadDataApi();
  }, []); */

  const getRoleType = useCallback((role: string, fill = '#9c9c9c') => {
    switch (role) {
      case 'all':
        return <All fill={fill} />;
      case 'tank':
        return <Tank fill={fill} />;
      case 'bruiser':
        return <Bruiser fill={fill} />;
      case 'support':
        return <Support fill={fill} />;
      case 'healer':
        return <Healer fill={fill} />;
      case 'ranged-assassin':
        return <Rangedassassin fill={fill} />;
      case 'melee-assassin':
        return <Meleeassassin fill={fill} />;
    }
  }, []);

  const getUniverseType = useCallback((universe: string, fill = '#9c9c9c') => {
    switch (universe) {
      case 'all':
        return <All fill={fill} />;
      case 'warcraft':
        return <Warcraft fill={fill} />;
      case 'starcraft':
        return <Starcraft fill={fill} />;
      case 'diablo':
        return <Diablo fill={fill} />;
      case 'overwatch':
        return <Overwatch fill={fill} />;
      case 'retro':
        return <Retro fill={fill} />;
    }
  }, []);

  const [currentRoles, setCurrentRoles] = useState('all');
  const [currentUniverses, setCurrentUniverses] = useState('Todos');

  useEffect(() => {
    let finalFilter: HeroData[] = heroesData;

    if (currentRoles !== 'all') {
      const filterRoles: HeroData[] = [];
      const notFilerRoles: HeroData[] = [];

      for (const currentHero of finalFilter) {
        if (currentHero.expandedRole.slug === currentRoles) {
          filterRoles.push({
            ...currentHero,
            isFiltered: false,
          });
        } else {
          notFilerRoles.push({
            ...currentHero,
            isFiltered: true,
          });
        }
      }

      finalFilter = [...filterRoles, ...notFilerRoles];
    }

    if (currentUniverses !== 'Todos') {
      const filterUniverses: HeroData[] = [];
      const notFilerUniverses: HeroData[] = [];

      for (const currentHero of finalFilter) {
        if (currentHero.franchise === currentUniverses) {
          filterUniverses.push({
            ...currentHero,
            isFiltered: false,
          });
        } else {
          notFilerUniverses.push({
            ...currentHero,
            isFiltered: true,
          });
        }
      }

      finalFilter = [...filterUniverses, ...notFilerUniverses];
    }

    if (currentRoles !== 'all' && currentUniverses !== 'Todos') {
      const filterUniverses: HeroData[] = [];
      const notFilerUniverses: HeroData[] = [];

      for (const currentHero of finalFilter) {
        if (
          currentHero.expandedRole.slug === currentRoles &&
          currentHero.franchise === currentUniverses
        ) {
          filterUniverses.push({
            ...currentHero,
            isFiltered: false,
          });
        } else {
          notFilerUniverses.push({
            ...currentHero,
            isFiltered: true,
          });
        }
      }

      finalFilter = [...filterUniverses, ...notFilerUniverses];
    }

    setListHerosShow(finalFilter);
  }, [heroesData, currentRoles, currentUniverses]);

  return (
    <Container>
      <LogoHeroes />
      <ContainerRow>
        <div>
          <FilterTitle>FUNÇÃO:</FilterTitle>
          <ContainerFilter>
            {roles.map((role) => (
              <FilterButton
                key={role}
                onClick={() => {
                  setCurrentRoles(role.split(':')[0]);
                }}
                title={role.split(':')[0]}
              >
                {getRoleType(
                  role.split(':')[0],
                  role.split(':')[0] === currentRoles ? '#FFF' : '#9c9c9c'
                )}
              </FilterButton>
            ))}
          </ContainerFilter>
        </div>

        <div>
          <FilterTitle>UNIVERSO:</FilterTitle>
          <ContainerFilter>
            {universes.map((universe) => (
              <FilterButton
                key={universe}
                onClick={() => {
                  setCurrentUniverses(universe.split(':')[1]);
                }}
                title={universe.split(':')[1]}
              >
                {getUniverseType(
                  universe.split(':')[0],
                  universe.split(':')[1] === currentUniverses
                    ? '#FFFFFF'
                    : '#9c9c9c'
                )}
              </FilterButton>
            ))}
          </ContainerFilter>
        </div>
      </ContainerRow>

      <ContainerScroll>
        {listHerosShow.length === 0
          ? heroesData.map((heroItem) => (
              <HeroCircleIcon key={heroItem.slug} heroData={heroItem} />
            ))
          : listHerosShow.map((heroItem) => (
              <HeroCircleIcon key={heroItem.slug} heroData={heroItem} />
            ))}
      </ContainerScroll>
    </Container>
  );
};

export default Home;

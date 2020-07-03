import microCors from 'micro-cors';
import { NextApiRequest, NextApiResponse } from 'next';
import Axios from 'axios';

const cors = microCors();

const CACHE_CONTROL_HEADER_VALUE =
  'max-age=0, s-maxage=43200, stale-while-revalidate, public';

const handlerHeroes = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Cache-Control', CACHE_CONTROL_HEADER_VALUE);

  const response = await Axios.get<string>(
    'https://heroesofthestorm.com/pt-br/heroes/'
  );

  const { data } = response;

  const startFind = 'window.blizzard.hgs.heroData = ';
  const endFind = 'window.blizzard.hgs.heroRotation = ';
  const startData = data.indexOf(startFind);
  const endData = data.indexOf(endFind);

  const heroes = data
    .slice(startData, endData)
    .replace(/\r?\n|\r/g, '')
    .slice(startFind.length, -1);

  const startFindHeroesRotation = data.slice(endData);
  const endDataHeroesRotation = startFindHeroesRotation.indexOf(';');

  const heroesRotation = startFindHeroesRotation.slice(
    endFind.length,
    endDataHeroesRotation
  );

  const parsedData = JSON.parse(heroes);
  const parsedHeroesRotationData = JSON.parse(heroesRotation) as string[];

  const heroesToReturn = parsedData.map((heroItem) => {
    return {
      name: heroItem.name,
      title: heroItem.title,
      isNew: heroItem.isNew,
      slug: heroItem.slug,
      expandedRole: heroItem.expandedRole,
      franchise: heroItem.franchise,
      circleIcon: heroItem.circleIcon,
      isInRotation: parsedHeroesRotationData.includes(heroItem.slug),
    };
  });

  res.statusCode = 200;
  res.json({
    heroes: heroesToReturn,
    heroesRotation: parsedHeroesRotationData,
  });
};

export default cors(handlerHeroes);

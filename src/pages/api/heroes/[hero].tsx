import microCors from 'micro-cors';
import { NextApiRequest, NextApiResponse } from 'next';
import Axios from 'axios';

const cors = microCors();

const CACHE_CONTROL_HEADER_VALUE =
  'max-age=0, s-maxage=43200, stale-while-revalidate, public';

const handlerHeroes = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Cache-Control', CACHE_CONTROL_HEADER_VALUE);

  const requestedHero = req.query.hero;

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

  const parsedData = JSON.parse(heroes);

  const heroData = parsedData.find((itemHero) => {
    return itemHero.slug === requestedHero;
  });

  res.statusCode = 200;
  res.json(heroData);
};

export default cors(handlerHeroes);

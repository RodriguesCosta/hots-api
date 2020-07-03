import microCors from 'micro-cors';
import { NextApiRequest, NextApiResponse } from 'next';
import Axios from 'axios';
import cheerio from 'cheerio';

const cors = microCors();

const CACHE_CONTROL_HEADER_VALUE =
  'max-age=0, s-maxage=43200, stale-while-revalidate, public';

interface TalentObject {
  level: number;
  talents: string[];
  image: string;
}

interface TalentListObject {
  buildName: string;
  talents: TalentObject[];
}

const handlerHeroBuild = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Cache-Control', CACHE_CONTROL_HEADER_VALUE);

  const requestedHero = req.query.hero;
  const response = await Axios.get<string>(
    `https://www.icy-veins.com/heroes/${requestedHero}-build-guide`
  );

  const { data } = response;
  const $ = cheerio.load(data);

  const talentList: TalentListObject[] = [];

  $('.heroes_build_header').map((i, el) => {
    const buildName = $(el)
      .find('h3')
      .text()
      .replace(/\r?\n|\r/g, '')
      .trim();
    talentList.push({
      buildName,
      talents: [],
    });
  });

  $('.heroes_build_talents').map((i, el) => {
    const talents: TalentObject[] = [];

    $(el)
      .find('.heroes_build_talent_tier')
      .map((i, el) => {
        const level = Number(
          $(el)
            .find('.heroes_build_talent_tier_subtitle')
            .html()
            .replace('Level ', '')
        );

        const talentsArray = [];
        $(el)
          .find('.heroes_build_talent_tier_visual span')
          .map((i, el) => {
            const tierYes = $(el).hasClass('heroes_build_talent_tier_yes');
            const tierSituational = $(el).hasClass(
              'heroes_build_talent_tier_situational'
            );

            if (tierYes) {
              talentsArray.push('yes');
            } else if (tierSituational) {
              talentsArray.push('situational');
            } else {
              talentsArray.push('no');
            }
          });

        let image = $(el).find('img').attr('src') as string;

        if (image.indexOf('//') === 0) {
          image = `https:${image}`;
        }

        talents.push({
          level,
          image,
          talents: talentsArray,
        });
      });

    talentList[i].talents = talents;
  });

  res.statusCode = 200;
  res.json({
    build: talentList,
  });
};

export default cors(handlerHeroBuild);

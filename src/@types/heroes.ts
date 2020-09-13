export interface HeroData {
  name?: string;
  title?: string;
  role?: Role;
  type?: Type;
  description?: string;
  shortDescription?: string;
  difficulty?: string;
  circleIcon?: string;
  cardPortrait?: string;
  franchise?: string;
  release?: Date | string;
  isNew?: boolean;
  isInRotation?: boolean;
  isFiltered?: boolean;
  slug?: string;
  trait?: Trait;
  href?: string;
  abilities?: Ability[];
  heroicAbilities?: Ability[];
  otherAbilities?: Trait[];
  expandedRole?: Role;
  stats?: Stats;
  skin?: Skin;
}

type TalentsPossibilityOptions = 'no' | 'yes' | 'situational';

export interface HeroTalent {
  level: number;
  image: string;
  talents: TalentsPossibilityOptions[];
}

export interface HeroTalentBuild {
  buildName: string;
  talents: HeroTalent[];
}

export interface Ability {
  name?: string;
  description?: string;
  displayText?: string;
  vital?: string;
  cooldown?: string;
  slug?: string;
  icon?: string;
}

export interface Role {
  name?: string;
  description?: string;
  slug?: string;
}

export interface Trait {
  name?: string;
  description?: string;
  displayText?: string;
  slug?: string;
  icon?: string;
  cooldown?: string;
  vital?: string;
}

export interface Skin {
  id?: string;
  name?: Description;
  description?: Description;
  href?: Href;
  slug?: string;
}

export interface Description {
  en_US?: string;
  es_MX?: string;
  pt_BR?: string;
  de_DE?: string;
  en_GB?: string;
  es_ES?: string;
  fr_FR?: string;
  it_IT?: string;
  pl_PL?: string;
  ru_RU?: string;
  ko_KR?: string;
  zh_TW?: string;
  zh_CN?: string;
}

export interface Href {
  href?: string;
}

export interface Stats {
  damage?: number;
  utility?: number;
  survivability?: number;
  complexity?: number;
}

export interface Type {
  name?: string;
  slug?: string;
}

type Language = {
  [name: string]: {
    background: string;
    color: string;
  };
};

const languages: Language = {
  android: {
    background: '#3ddc84',
    color: '#000',
  },
  ci: {
    background: '#e13a1c',
    color: '#fff',
  },
  css: {
    background: '#178fce',
    color: '#fff',
  },
  docker: {
    background: '#384d54',
    color: '#fff',
  },
  'docker-compose': {
    background: '#bac9d9',
    color: '#222',
  },
  documentation: {
    background: '#900f10',
    color: '#fff',
  },
  docz: {
    background: '#6ef1b5',
    color: '#000',
  },
  firebase: {
    background: '#ffcb2b',
    color: '#222',
  },
  gatsby: {
    background: '#663399',
    color: '#fff',
  },
  gitlab: {
    background: '#fc6d26',
    color: '#fff',
  },
  flask: {
    background: '#000',
    color: '#fff',
  },
  expo: {
    background: '#222',
    color: '#fff',
  },
  mdx: { background: '#f9ac00', color: '#fff' },
  javascript: { background: '#f0db4f', color: '#222' },
  linux: { background: '#222', color: '#4FF14F' },
  openapi: { background: '#4c5b31', color: '#fff' },
  python: { background: '#3572A5', color: '#fff' },
  programming: { background: '#367ee9', color: '#fff' },
  project: {
    background: '#009e49',
    color: '#fff',
  },
  pytest: {
    background: '#009bdb',
    color: '#fff',
  },
  react: { background: '#222', color: '#00d8ff' },
  'react-navigation': { background: '#6b52ae', color: '#fff' },
  'react-native': { background: '#222', color: '#00d8ff' },
  storybook: { background: '#ff4785', color: '#fff' },
  sqlalchemy: { background: '#778877', color: '#000' },
  testing: { background: '#fde628', color: '#000' },
  tox: { background: '#6b7c6b', color: '#fff' },
  tailwindcss: { background: '#1ab4b7', color: '#fff' },
  typescript: { background: '#2775c3', color: '#fff' },
  'visual-studio': { background: '#1d71ae', color: '#fff' },
  virtualbox: { background: '#1f3a60', color: '#fff' },
  webstorm: {
    background: '#00cdd7',
    color: '#000',
  },
};

const defaultLangauge = {
  background: '#22262f',
  color: '#dbe1e8',
};

export { languages, defaultLangauge };

export default languages;

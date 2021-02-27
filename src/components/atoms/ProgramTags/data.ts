type Language = {
  [name: string]: {
    background: string;
    color: string;
  };
};

const languages: Language = {
  android: {
    background: '#126337',
    color: '#fff',
  },
  ci: {
    background: '#9F2914',
    color: '#fff',
  },
  css: {
    background: '#1378AE',
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
    background: '#075F37',
    color: '#fff',
  },
  dns: { background: '#0C6453', color: '#fff' },
  firebase: {
    background: '#ffcb2b',
    color: '#222',
  },
  gatsby: {
    background: '#663399',
    color: '#fff',
  },
  golang: {
    background: '#29BEB0',
    color: '#000',
  },
  gitlab: {
    background: '#FB6E28',
    color: '#050505',
  },
  flask: {
    background: '#000',
    color: '#fff',
  },
  expo: {
    background: '#222',
    color: '#fff',
  },
  mdx: { background: '#ffaa00', color: '#222' },
  mongodb: {
    background: '#3FA037',
    color: '#000',
  },
  javascript: { background: '#f0db4f', color: '#222' },
  linux: { background: '#222', color: '#4FF14F' },
  openapi: { background: '#4c5b31', color: '#fff' },
  networking: { background: '#943B00', color: '#fff' },
  python: { background: '#3572A5', color: '#fff' },
  programming: { background: '#134FAA', color: '#fff' },
  project: {
    background: '#00612D',
    color: '#fff',
  },
  pytest: {
    background: '#005D85',
    color: '#fff',
  },
  react: { background: '#222', color: '#00d8ff' },
  'react-navigation': { background: '#6b52ae', color: '#fff' },
  'react-native': { background: '#222', color: '#00d8ff' },
  storybook: { background: '#B3003C', color: '#fff' },
  sqlalchemy: { background: '#4A554A', color: '#fff' },
  testing: { background: '#fde628', color: '#121212' },
  tox: { background: '#424C42', color: '#fff' },
  tailwindcss: { background: '#128082', color: '#fff' },
  typescript: { background: '#2775c3', color: '#fff' },
  'visual-studio': { background: '#1d71ae', color: '#fff' },
  virtualbox: { background: '#1f3a60', color: '#fff' },
  webstorm: {
    background: '#00AAB3',
    color: '#000',
  },
};

const defaultLangauge = {
  background: '#22262f',
  color: '#dbe1e8',
};

export { languages, defaultLangauge };

export default languages;

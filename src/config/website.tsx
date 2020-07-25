import React from 'react';

const config = {
  meta: {
    hero: (
      <span>
        Hello, I&apos;m <span className="text-primary">Haseeb</span> a software
        engineer. Welcome to my <span className="text-primary">website</span>{' '}
        and <span className="text-primary">blog</span>.
      </span>
    ),
  },
  projects: {
    stegappasaurus: {
      name: 'Stegappasaurus',
      description:
        'Stegappasaurus is an open-source free mobile application, built using React Native. This application uses steganography algorithms to hide data within images.',
      image: '/projects/stegappasaurus.png',
      url: 'https://gitlab.com/hmajid2301/stegappasaurus',
    },
    composerisation: {
      name: 'Composerisation',
      description:
        'Composerisation is an open-source CLI tool, built using Python. The tool allows you to convert between docker-compose and Docker CLI syntax. You can also visit the website to use the tool instead of installing it to your local machine.',
      image: '/projects/composerisation.png',
      url: 'https://gitlab.com/hmajid2301/composerisation',
    },
    charityShop: {
      name: 'Charity Shop Exchange',
      description:
        'Charity Shop Exchange is a website which allows customers to order books and DvDs of a specific genre from a charity shop within their local area. They are able to subscribe to a monthly package. It initially created in the Codevid hackathon and won best project of week 3.',
      image: '/projects/charity-shop.png',
      url: 'https://github.com/Charity-Shop-Exchange/Charity-Shop-Exchange',
    },
    nerf: {
      name: '[WIP]: Nerf Tank',
      description: `A remote control car built using arduino, which has a nerf gun.
    It uses ML to determine who it should shot and then tracks the target.`,
      image: '/projects/nerf.jpg',
      url: 'https://gitlab.com/hmajid2301/nerf-tank',
    },
  },
  repositories: {
    'live-light': {
      name: 'live-light',
      url: 'https://github.com/hmajid2301/live-light',
      description:
        "A light made with PI Zero, which will change colour depending on if I'm in a meeting or not.",
      stars: 10,
    },
    'gitlab-auto-release': {
      name: 'gitlab-auto-release',
      url: 'https://gitlab.com/gitlab-automation-toolkit/gitlab-auto-release',
      description:
        'A CLI tool that allows you create releases in GitLab automatically.',
      stars: 7,
    },
    articles: {
      name: 'articles',
      url: 'https://github.com/hmajid2301/articles',
      description:
        'This repo contains all the articles written by me, in markdown and also all of their example source code.',
      stars: 55,
    },
    'gitlab-github-mirror-repo': {
      name: 'gitlab-github-mirror-repo',
      url: 'https://github.com/hmajid2301/gitlab-github-mirror-repo',
      description:
        'A script that will create a new repo on Gitlab and Github. Then mirror (push) Gitlab to Github.',
      stars: 0,
    },
    'markdown-mermaid-to-images': {
      name: 'markdown-mermaid-to-images',
      url: 'https://github.com/hmajid2301/markdown-mermaid-to-images',
      description: 'Exports mermaid diagrams in Markdown documents as images.',
      stars: 0,
    },
    'gitlab-auto-mr': {
      name: 'gitlab-auto-mr',
      url: 'https://gitlab.com/gitlab-automation-toolkit/gitlab-auto-mr',
      description:
        ' A CLI script that allows you create MR in GitLab automatically.',
      stars: 0,
    },
  },
};

export default config;

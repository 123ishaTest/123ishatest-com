import type { ProjectDetail } from '$lib/content/ProjectDetail';

export const developerProjects: ProjectDetail[] = [
  // {
  //   title: 'Clio crossword database',
  //   caption: 'A crossword and clue database voor Steenhuis Puzzles',
  //   src: 'images/steenhuis.png',
  //   imgStyle: 'p-8',
  //   href: 'https://www.steenhuispuzzels.nl/',
  //   linkLabel: 'Visit client',
  // },
  {
    title: 'Sports Association Member Administration',
    caption: 'A member administration, CMS, and community hub managing thousands of members!',
    src: 'images/admin-backend.png',
    imgStyle: 'p-2',
    href: 'https://punch.tudelft.nl/',
    linkLabel: 'Admire',
  },

  {
    title: 'Project March Exoskeleton',
    caption: 'Building robotic legs so that paraplegic patients can walk again',
    src: 'images/exoskeleton.png',
    href: 'https://www.projectmarch.nl/',
    linkLabel: 'View',
  },

  {
    title: 'Incremental Game Template',
    caption:
      'A collection of useful scripts to help you develop incremental games.\n' +
      'Soon to be superseded by the Ludiek game engine!',
    src: 'images/incremental-game-template.png',
    href: 'https://123ishatest.github.io/igt-docs/',
    linkLabel: 'Browse',
  },
];

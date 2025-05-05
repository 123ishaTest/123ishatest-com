import type { ProjectDetail } from '$lib/content/ProjectDetail';

export const projects: ProjectDetail[] = [
  {
    title: 'PianOS',
    caption:
      "Ever felt upset while playing Super Mario because your controller didn't make enough noise?\n" +
      '  No worries, with the <span class="italic">new-and-improved</span> <span class="font-bold">PianOS</span> you can now play your favourite games and produce classical music at the same time!',
    src: 'images/piano.jpeg',
    href: '/projects/pong-piano',
  },
  {
    title: 'BeatBox',
    caption:
      "Whether you don't know the difference between D# and Eb or are secretly a master of Audacity,\n" +
      '  the BeatBox will be a fun musical experience for all!',
    src: 'images/beatbox.png',
    href: '',
  },
  {
    title: 'Foolsball',
    caption:
      'Do you always lose at foosball? No more!\n' + '  This automated goalkeeper is so bad that even you can beat it!',
    src: 'images/foosball.png',
    href: '',
  },
  {
    title: 'Hand-crafted unique puzzles',
    caption: 'High quality hand-crafted puzzles ' + '\nThis puzzle contains a hidden activity, can you find it?',
    src: 'images/puzzle-ups-and-downs.png',
    href: '/projects/puzzles',
    linkLabel: 'Learn more',
  },
  {
    title: 'PokéClicker',
    caption: 'A browser game which combines the gameplay of incremental games with the nostalgia of Pokémon',
    src: 'images/pokeclicker.png',
    href: 'https://www.pokeclicker.com/',
    linkLabel: 'Play!',
  },
  {
    title: 'Incremental Game Template',
    caption:
      'A collection of useful scripts to help you develop incremental games.\n' +
      'Soon to be superseded by the Ludiek game engine!',
    src: 'images/incremental-game-template.png',
    href: 'https://123ishatest.github.io/igt-docs/',
    linkLabel: 'Browse!',
  },
  {
    title: 'The Road Not Taken',
    caption: 'A fantasy rogue-like incremental developed for the Bigmode 2025 game jam!',
    src: 'images/road-not-taken.png',
    href: 'https://123ishatest.itch.io/the-road-not-taken',
    linkLabel: 'Play!',
  },
  {
    title: 'Punch Go',
    caption: '',
    src: 'images/punch-go.png',
    // href: '',
  },
  // {
  //   title: '',
  //   caption: '',
  //   src: '',
  //   href: '',
  // },
  // {
  //   title: '',
  //   caption: '',
  //   src: '',
  //   href: '',
  // },

  // TODO(@Isha): Generate puzzles
  // TODO(@Isha): Punch Go
];

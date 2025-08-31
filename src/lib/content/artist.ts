import type { ProjectDetail } from '$lib/content/ProjectDetail';

export const artistProjects: ProjectDetail[] = [
  {
    title: 'Gaming Piano',
    caption:
      "Ever felt upset while playing Super Mario because your controller didn't make enough noise?\n" +
      '  No worries, with the <i>new-and-improved</i> <b>PianOS</b> you can now play your favourite games and produce classical music at the same time!',
    src: 'images/pianos/piano-build.jpeg',
    href: '/projects/pianos',
    linkLabel: 'Why?',
  },
  {
    title: 'BeatBox',
    caption:
      "Whether you don't know the difference between D# and Eb or are secretly a master of Audacity, " +
      'the BeatBox will be a fun musical experience for all!',
    src: 'images/beatbox/beatbox-open.jpg',
    href: '/projects/beatbox',
    linkLabel: 'Show me!',
  },
  {
    title: 'Foolsball',
    caption:
      'Do you always lose at foosball? No more!\n' + '  This automated goalkeeper is so bad that even you can beat it!',
    src: 'images/foosball.png',
    href: '',
  },
];

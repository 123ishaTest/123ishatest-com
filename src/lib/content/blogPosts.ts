import type { BlogPost } from '$lib/model/BlogPost';
import { asset } from '$app/paths';

export const flaggalicious: BlogPost = {
  id: 'flaggalicious',
  title: 'Flaggalicious, a flag guessing game',
  description: 'A vexillological puzzle game designed by high school me.',
  date: '27/03/2026',
  image: asset('/images/flaggalicious/level-1.png'),
  tags: ['games'],
  path: '/(app)/blog/(posts)/flaggalicious',
};

export const dataDrivenSystems: BlogPost = {
  id: 'data-driven-systems',
  title: 'Game engines, Sliced bread, and data-driven systems',
  description: 'Designing data-driven systems by separating behavior from content.',
  date: '16/03/2026',
  image: asset('/images/data-driven-systems/sliced-bread-yaml.png'),
  tags: ['games', 'overengineering'],
  path: '/(app)/blog/(posts)/data-driven-systems',
};

export const piano: BlogPost = {
  id: 'piano',
  title: 'Video game piano',
  description:
    "Ever felt upset while playing Super Mario because your controller didn't make enough noise? No worries, with the new-and-improved PianOS you can now play your favourite games and produce classical music at the same time!",
  date: '01/12/2023',
  image: '',
  tags: ['games'],
  path: '/(app)/blog/(posts)/piano',
};

export const beatBox: BlogPost = {
  id: 'beat-box',
  title: 'BeatBox - A musical cube',
  description:
    "Whether you don't know the difference between D# and Eb or are secretly a master of Audacity, the BeatBox will be a fun musical experience for all!",
  date: '01/03/2026',
  image: asset('/images/beatbox/beatbox-led.jpg'),
  tags: ['games'],
  path: '/(app)/blog/(posts)/beat-box',
};

export const foolsball: BlogPost = {
  id: 'foolsball',
  title: 'Foolsball',
  description:
    'Do you always lose at foosball? No longer! This automated goalkeeper is so bad that even you can beat it!',
  date: '01/11/2024',
  image: '',
  tags: ['games'],
  path: '/(app)/blog/(posts)/foolsball',
};

export const blogPosts: BlogPost[] = [flaggalicious, dataDrivenSystems, beatBox];

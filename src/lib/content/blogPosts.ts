import type { BlogPost } from '$lib/model/BlogPost';

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
  title: 'BeatBox',
  description:
    "Whether you don't know the difference between D# and Eb or are secretly a master of Audacity, the BeatBox will be a fun musical experience for all!",
  date: '01/04/2025',
  image: '',
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

export const blogPosts: BlogPost[] = [
  piano,
  {
    id: 'unique-puzzle',
    title: 'Unique Puzzles',
    description: 'A short story about the awesomeness of puzzles',
    date: '01/01/2026',
    image: '',
    tags: ['games'],
    path: '/(app)/blog/(posts)/puzzles',
  },
  beatBox,
];

import type { Asset } from '$app/types';

export interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  url: string;
  image: Asset;
}

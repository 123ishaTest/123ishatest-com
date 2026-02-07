import type { Asset } from '$app/types';
import type { RouteId } from '$app/types';

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  path: RouteId;
  image: Asset;

  tags: string[];
}

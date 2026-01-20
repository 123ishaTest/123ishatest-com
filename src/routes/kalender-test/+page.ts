const calendar =
  'https://calendar.google.com/calendar/u/0?cid=ZDliZTM0YTEzMjMxOGI2YmJjMjAyNGY0YzZmYWI3OWU1NTRkODdmNDVkZDAyNjhkNDhhMzM4NzM1Nzk3MTc0OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t';

import { redirect } from '@sveltejs/kit';

export function load() {
  redirect(302, calendar);
}
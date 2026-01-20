const calendar =
  'https://calendar.google.com/calendar/ical/d9be34a132318b6bbc2024f4c6fab79e554d87f45dd0268d48a3387357971748%40group.calendar.google.com/public/basic.ics';

import { redirect } from '@sveltejs/kit';

export function load() {
  redirect(302, calendar);
}
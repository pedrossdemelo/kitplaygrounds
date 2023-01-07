import type { PageServerLoad } from '../sverdle/$types';

export const load = (async ({ fetch }) => {
  const html = await fetch('/thing.html').then((r) => r.text());
  return { html };
}) satisfies PageServerLoad;

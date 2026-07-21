import base from './astro.config';
const cfg: any = base;
cfg.cacheDir = '/sessions/pensive-inspiring-faraday/astro-cache';
cfg.outDir = '/sessions/pensive-inspiring-faraday/dist-out';
cfg.vite = { ...(cfg.vite || {}), cacheDir: '/sessions/pensive-inspiring-faraday/vite-cache' };
export default cfg;

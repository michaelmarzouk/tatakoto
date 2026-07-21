import base from './astro.config';
const cfg: any = base;
cfg.cacheDir = '/tmp/tata-astro-cache';
cfg.outDir = '/tmp/tata-dist-out';
cfg.vite = { ...(cfg.vite || {}), cacheDir: '/tmp/tata-vite-cache' };
export default cfg;

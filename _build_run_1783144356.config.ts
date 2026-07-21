import base from './astro.config';
const cfg: any = base;
cfg.cacheDir = '/tmp/tb_1783144356/cache';
cfg.outDir = '/tmp/tb_1783144356/dist';
cfg.vite = { ...(cfg.vite || {}), cacheDir: '/tmp/tb_1783144356/vite' };
export default cfg;

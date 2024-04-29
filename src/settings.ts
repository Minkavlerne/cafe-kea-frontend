const isProduction = import.meta.env.MODE === 'production';

const URL = isProduction ? import.meta.env.VITE_PROD_API_BASE_URL : import.meta.env.VITE_DEV_API_BASE_URL;

const MODE = isProduction ? 'production' : 'development';
console.log(MODE)

export const API_URL = URL;


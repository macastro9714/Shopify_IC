const config = {
    host: process.env.NASA_API_URL as string,
};

export type ConfigType = typeof config;
export default config;

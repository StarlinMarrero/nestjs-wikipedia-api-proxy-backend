// import dotenv from "dotenv";

// dotenv.config();

const serverConfig = {
    port: process.env.PORT || 3000,
};

export const wikipediaConfig = {
    baseUrl: process.env.WIKIPEDIA_BASE_URL || "https://api.wikimedia.org",
};

export default {
    serverConfig,
    wikipediaConfig,
};

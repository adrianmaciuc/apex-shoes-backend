export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      origin: ["https://apexshoes.martioli.com/", "http://localhost:5173"],
      credentials: true,
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];

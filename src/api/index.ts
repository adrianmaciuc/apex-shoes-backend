import { createStrapi } from "@strapi/strapi";

let strapiInstance: any = null;

async function getStrapi() {
  if (!strapiInstance) {
    strapiInstance = await createStrapi({
      appDir: __dirname,
      distDir: `${__dirname}/../dist`,
    }).load();
  }
  return strapiInstance;
}

export default async function handler(req: any, res: any) {
  try {
    const strapi = await getStrapi();
    await strapi.server.app.callback()(req, res);
  } catch (err) {
    console.error("Error handling request:", err);
    res.statusCode = 500;
    res.end("Internal server error");
  }
}

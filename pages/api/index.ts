import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  try {
    const urlGenel = `${process.env.API_URL}/Genel`;
    const urlOzet = `${process.env.API_URL}/Ozet`;

    const [resGenel, resOzet] = await Promise.all([
      fetch(urlGenel, {
        method: "POST",
      }),
      fetch(urlOzet, {
        method: "POST",
      }),
    ]);

    const [dataGenel, dataOzet] = await Promise.all([
      resGenel.json(),
      resOzet.json(),
    ]);

    return new Response(JSON.stringify({ ...dataOzet, grafikler: dataGenel }), {
      status: 200,
      headers: {
        "Cache-Control": "s-maxage=21600", // 6 hours
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }
    return new Response("Something went wrong", { status: 500 });
  }
}

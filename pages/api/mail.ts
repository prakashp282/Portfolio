import { NextApiRequest, NextApiResponse } from "next";

export default async function mail(req: NextApiRequest, res: NextApiResponse) {
  try {
    const body = {
      ...req.body,
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
    };

    //Make the api call
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();
    let code = 200;
    if (!result.success) {
      code = result.status_code ?? 400;
      console.error(result);
    }
    return res.status(code).json(result.message);
  } catch (error) {
    console.error(error);
  }
  res.end();
}

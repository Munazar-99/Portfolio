import type { NextApiRequest, NextApiResponse } from "next";
import { SanityClient, groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { Tskill } from "../../../typings";

const query = groq`*[_type == 'skill']`;

type Data = {
  skills: Tskill[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skills: Tskill[] = await sanityClient.fetch(query);
  res.status(200).json({ skills });
}

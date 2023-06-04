import { Project } from "./../../../typings.d";
import type { NextApiRequest, NextApiResponse } from "next";
import { SanityClient, groq } from "next-sanity";
import { sanityClient } from "../../../sanity";

const query = groq`*[_type == 'projects'] | order(_createdAt desc){
    ...,
    technologies[]->
}`;

type Data = {
  projects: Project[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: Project[] = await sanityClient.fetch(query);
  res.status(200).json({ projects });
}

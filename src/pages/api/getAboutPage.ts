import { AboutPage } from './../../../typings.d';
import type { NextApiRequest, NextApiResponse } from 'next'
import { SanityClient, groq } from 'next-sanity'
import { sanityClient } from '../../../sanity'

const query = groq`*[_type == 'aboutpage'][0]`

type Data = {
    aboutpage: AboutPage
  }
  
  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const aboutpage:AboutPage = await sanityClient.fetch(query)
    res.status(200).json({ aboutpage })
  }
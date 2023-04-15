import { HomePage } from './../../../typings.d';
import type { NextApiRequest, NextApiResponse } from 'next'
import { SanityClient, groq } from 'next-sanity'
import { sanityClient } from '../../../sanity'

const query = groq`*[_type == 'homepage'][0]{
    ...,
    socials[]->
}`

type Data = {
    homepage: HomePage
  }
  
  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const homepage:HomePage = await sanityClient.fetch(query)
    res.status(200).json({ homepage })
  }
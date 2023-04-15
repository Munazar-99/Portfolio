import {createClient} from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    dataset: 'production',
    useCdn: true, // set to `true` to fetch from edge cache
    apiVersion: '2022-01-12', // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  })


export const urlFor = (source: any) => createImageUrlBuilder(sanityClient).image(source)
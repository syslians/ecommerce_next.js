import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '0y5r5t6n',
    dataset: 'production',
    apiVersion: '2023-04-05',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const bulilder = imageUrlBuilder(client);

export const urlFor = (source) => bulilder.image(source);
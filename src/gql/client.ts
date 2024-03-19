import { GraphQLClient } from 'graphql-request'

const ENDPOINT = 'https://graphql.datocms.com'
const headers: Record<string, string> = {
  Accept: 'application/json',
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_CMS_DATOCMS_API_TOKEN}`,
}

// Enable Dato preview mode when not in production
if (process.env.VERCEL_ENV !== 'production') {
  headers['X-Include-Drafts'] = 'true'
}

export const client = new GraphQLClient(ENDPOINT, {
  headers,
})

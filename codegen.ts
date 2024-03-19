import type { CodegenConfig } from '@graphql-codegen/cli'
require('dotenv').config()

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://graphql.datocms.com': {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_CMS_DATOCMS_API_TOKEN,
        },
      },
    },
  ],
  documents: ['src/**/*.tsx'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/': {
      preset: 'client',
    },
  },
}

export default config

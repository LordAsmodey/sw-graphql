import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  documents: ['src/**/*.tsx', 'src/**/*.ts'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql-generated/': {
      preset: 'client'
    }
  }
}

export default config

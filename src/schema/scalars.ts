import { makeExecutableSchema } from '@graphql-tools/schema'
import { GraphQLJSON } from 'graphql-scalars'
 
const schemaString = /* GraphQL */ `
  scalar JSON
 
  type Foo {
    aField: JSON
  }
 
  type Query {
    foo: Foo
  }
`
 
const resolveFunctions = {
  JSON: GraphQLJSON
}
 
const jsSchema = makeExecutableSchema({ typeDefs: schemaString, resolvers: resolveFunctions })
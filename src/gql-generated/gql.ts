/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query People {\n    allPeople {\n        people {\n            id\n            name\n            gender\n            skinColor\n            eyeColor\n            homeworld {\n                name\n            }\n        }\n    }\n}": types.PeopleDocument,
    "query Films {\n    allFilms {\n        films {\n            title\n            director\n            releaseDate \n        }\n    }\n}": types.FilmsDocument,
    "query Planets {\n    allPlanets {\n        planets {\n            name\n            population\n            diameter\n            gravity\n            rotationPeriod\n\n        }\n    }\n}": types.PlanetsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query People {\n    allPeople {\n        people {\n            id\n            name\n            gender\n            skinColor\n            eyeColor\n            homeworld {\n                name\n            }\n        }\n    }\n}"): (typeof documents)["query People {\n    allPeople {\n        people {\n            id\n            name\n            gender\n            skinColor\n            eyeColor\n            homeworld {\n                name\n            }\n        }\n    }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Films {\n    allFilms {\n        films {\n            title\n            director\n            releaseDate \n        }\n    }\n}"): (typeof documents)["query Films {\n    allFilms {\n        films {\n            title\n            director\n            releaseDate \n        }\n    }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Planets {\n    allPlanets {\n        planets {\n            name\n            population\n            diameter\n            gravity\n            rotationPeriod\n\n        }\n    }\n}"): (typeof documents)["query Planets {\n    allPlanets {\n        planets {\n            name\n            population\n            diameter\n            gravity\n            rotationPeriod\n\n        }\n    }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
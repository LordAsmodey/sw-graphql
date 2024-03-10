import {graphql} from "../../gql-generated";

export const GET_CHARACTERS = graphql(`query People {
    allPeople {
        people {
            id
            name
            gender
            skinColor
            eyeColor
            homeworld {
                name
            }
        }
    }
}`);
export const GET_CHARACTER = graphql(`query GetCharacter($id: ID!) {
    person(id: $id) {
        id
        name
        birthYear
        eyeColor
        gender
        hairColor
        height
        mass
        skinColor
        homeworld {
            id
            name
        }
        filmConnection {
            films {
                id
                title
            }
        }
    }
}
`);

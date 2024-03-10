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

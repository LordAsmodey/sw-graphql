import {graphql} from "../../gql-generated";

export const GET_FILMS = graphql(`query Films {
    allFilms {
        films {
            title
            director
            releaseDate 
        }
    }
}`);

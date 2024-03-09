import {graphql} from "../../gql-generated";

export const GET_PLANETS = graphql(`query Planets {
    allPlanets {
        planets {
            name
            population
            diameter
            gravity
            rotationPeriod

        }
    }
}`);

import {gql, useQuery} from "@apollo/client";
import {NavigationBar} from "./components/NavigationBar.tsx";

const GET_FILMS = gql`
    query Query {
        allFilms {
            films {
                title
                planetConnection {
                    planets {
                        name
                        population
                    }
                }
                director
                releaseDate
                producers
                speciesConnection {
                    species {
                        name
                        classification
                        homeworld {
                            name
                        }
                    }
                }
            }
        }
    }
`;

function App() {
  const { data } = useQuery(GET_FILMS);
  console.log(data)
  return (
    <div className="p-4 flex justify-around items-center">
      <NavigationBar />
    </div>
  )
}

export default App

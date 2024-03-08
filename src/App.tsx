import {gql, useQuery} from "@apollo/client";
import {User} from "@nextui-org/react";

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
      <User
        name="Jane Doe"
        description="Product Designer"
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
        }}
      />
      <User
        name="Jane Doe"
        description="Product Designer"
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
        }}
      />
      <User
        name="Jane Doe"
        description="Product Designer"
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
        }}
      />
    </div>
  )
}

export default App

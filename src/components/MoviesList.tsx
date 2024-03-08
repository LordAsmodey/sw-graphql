import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";
import {useQuery} from "@apollo/client";
import {OverlaySpinner} from "./OverlaySpinner.tsx";
import {graphql} from "../gql-generated";

const FILMS = graphql(`query Films {
    allFilms { 
        films {
            title
            director
            releaseDate
        }
    }
}`);

export const MoviesList = () => {
  const { data: allFilms, loading, error } = useQuery(FILMS);
  console.log(allFilms?.allFilms?.films)
  const films = allFilms?.allFilms?.films || [];

  return (
    <>
    {(loading || error) && <OverlaySpinner />}
      <Table removeWrapper aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Title</TableColumn>
          <TableColumn>Premiere</TableColumn>
          <TableColumn>Director</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"Loading data, please wait."}>
          {films.map(film => (
            <TableRow key={film?.title}>
              <TableCell>{film?.title}</TableCell>
              <TableCell>{film?.releaseDate}</TableCell>
              <TableCell>{film?.director}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

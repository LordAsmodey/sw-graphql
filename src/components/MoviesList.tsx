import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";
import {useQuery} from "@apollo/client";
import {GET_FILMS} from "../graphql/queries/getFilms.ts";
import {OverlaySpinner} from "./OverlaySpinner.tsx";


export const MoviesList = () => {
  const { data: allFilms, loading, error } = useQuery(GET_FILMS);
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
        <TableBody emptyContent={"Loading data, please wait..."}>
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

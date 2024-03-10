import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";
import {useQuery} from "@apollo/client";
import {GET_FILMS} from "../graphql/queries/getFilms.ts";
import {OverlaySpinner} from "./OverlaySpinner.tsx";
import {useMemo} from "react";
import {FilmsQuery} from "../gql-generated/graphql.ts";


export const MoviesList = ({searchTerm}: {searchTerm: string}) => {
  const { data: allFilms, loading, error } = useQuery<FilmsQuery>(GET_FILMS);

  const foundFilms = useMemo(() => {
    const films = allFilms?.allFilms?.films || [];
    return films?.filter(film => {
      if (film?.title) {
        return film.title.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return false;
    })
  }, [allFilms?.allFilms?.films, searchTerm]);

  return (
    <>
    {(loading || error) && <OverlaySpinner />}
      <Table isStriped aria-label="SW movies">
        <TableHeader>
          <TableColumn>Title</TableColumn>
          <TableColumn>Premiere</TableColumn>
          <TableColumn>Director</TableColumn>
        </TableHeader>
        <TableBody isLoading={loading} loadingContent={"Loading..."}>
          {foundFilms.map(film => (
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

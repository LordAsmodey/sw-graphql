import {useQuery} from "@apollo/client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure
} from "@nextui-org/react";
import {OverlaySpinner} from "./OverlaySpinner.tsx";
import {useMemo, useState} from "react";
import {GET_CHARACTERS} from "../graphql/queries/getCharcteres.ts";
import {PeopleQuery} from "../gql-generated/graphql.ts";
import {CharactersInfoModel} from "./CharactersInfoModel.tsx";

export const CharactersList = ({searchTerm}: {searchTerm: string}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [characterId, setCharacterId] = useState<string>('');
  const {data, loading, error} = useQuery<PeopleQuery>(GET_CHARACTERS);

  const foundPeople = useMemo(() => {
    const people = data?.allPeople?.people || [];
    return people?.filter(person => {
      if (person?.name) {
        return person.name.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return false;
    })
  }, [data?.allPeople?.people, searchTerm]);

  const onModalOpenHandler = (id: string | null | undefined) => {
    if (id) {
      onOpen();
      setCharacterId(id);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {(loading || error) && <OverlaySpinner />}
      <Table
        selectionMode="single"
        defaultSelectedKeys={["2"]}
        aria-label="SW People"
      >
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Gender</TableColumn>
          <TableColumn>Skin color</TableColumn>
          <TableColumn>Eye color</TableColumn>
          <TableColumn>Home world</TableColumn>
        </TableHeader>
        <TableBody isLoading={loading} loadingContent="Loading...">
          {foundPeople.map(person => (
            <TableRow key={person?.id} onClick={() => onModalOpenHandler(person?.id)}>
              <TableCell>{person?.name}</TableCell>
              <TableCell>{person?.gender}</TableCell>
              <TableCell>{person?.skinColor}</TableCell>
              <TableCell>{person?.eyeColor}</TableCell>
              <TableCell>{person?.homeworld?.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {characterId.length > 0 && <CharactersInfoModel isOpen={isOpen} onOpenChange={onOpenChange} characterId={characterId} />}
    </div>
  );
}

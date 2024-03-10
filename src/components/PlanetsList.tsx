import {useQuery} from "@apollo/client";
import {getKeyValue, Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";
import {useMemo, useState} from "react";
import {SortDescriptor} from "@react-types/shared/src/collections";
import {Planet, PlanetsQuery} from "../gql-generated/graphql.ts";
import {GET_PLANETS} from "../graphql/queries/getPlanets.ts";
export const PlanetsList = ({searchTerm}: {searchTerm: string}) => {
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({ column: '', direction: 'ascending' });
  const {data, loading} = useQuery<PlanetsQuery>(GET_PLANETS);

  const foundPlanets = useMemo(() => {
    const planets = data?.allPlanets?.planets as Planet[];
    return planets?.filter(planet => {
      if (planet.name) {
        return planet.name.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return false;
    })
  }, [data?.allPlanets?.planets, searchTerm]);

  const sortedData = useMemo(() => {
    if (!data) return [];
    return sortData(foundPlanets, sortDescriptor);
  }, [data, foundPlanets, sortDescriptor]);


  function sortData(data: Planet[], sortDescriptor: SortDescriptor) {
    if (!sortDescriptor.column) return data;
    return [...data].sort((a, b) => {
      // TODO: Fix types
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (a[sortDescriptor.column] < b[sortDescriptor.column]) {
        return sortDescriptor.direction === 'ascending' ? -1 : 1;
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (a[sortDescriptor.column] > b[sortDescriptor.column]) {
        return sortDescriptor.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }


  return (
    <Table
      aria-label="SW Planets"
      sortDescriptor={sortDescriptor}
      onSortChange={(newSortDescriptor) => setSortDescriptor(newSortDescriptor)}
      classNames={{
        table: "min-h-[400px]",
      }}
    >
      <TableHeader>
        <TableColumn key="name" allowsSorting>
          Name
        </TableColumn>
        <TableColumn key="population" allowsSorting>
          Population
        </TableColumn>
        <TableColumn key="diameter" allowsSorting>
          Diameter
        </TableColumn>
        <TableColumn key="gravity" allowsSorting>
          Gravity
        </TableColumn>
        <TableColumn key="rotationPeriod" allowsSorting>
          Rotation Period
        </TableColumn>
      </TableHeader>
      <TableBody
        items={sortedData}
        isLoading={loading}
        loadingContent={<Spinner label="Loading..." />}
      >
        {(item: Planet) => (
          <TableRow key={item.name}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

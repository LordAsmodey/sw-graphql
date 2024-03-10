import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import {GET_CHARACTER} from "../graphql/queries/getCharcteres.ts";
import {useQuery} from "@apollo/client";
import {OverlaySpinner} from "./OverlaySpinner.tsx";

type Props = {
  isOpen: boolean,
  onOpenChange: () => void,
  characterId: string
};
export const CharactersInfoModel = ({isOpen, onOpenChange, characterId}: Props) => {
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id: characterId },
  });

  const person = data?.person;

  return (
    <div className="flex flex-col gap-2">
      {(loading || error) && <OverlaySpinner />}
      <Modal
        isOpen={isOpen && !!person}
        placement="auto"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{person?.name}</ModalHeader>
              <ModalBody>
                <p>Name: {person?.name} </p>
                <p> Birth Year: {person?.birthYear}</p>
                <p> Eye Color: {person?.eyeColor}</p>
                <p>Gender: {person?.gender}</p>
                <p>Hair Color: {person?.hairColor}</p>
                <p> Height: {person?.height}</p>
                <p> Weight: {person?.mass}</p>
                <p> Skin Color: {person?.skinColor}</p>
                <p> Home world: {person?.homeworld?.name}</p>

                <p>
                  <b className="text-blue-300">{person?.name}</b> is a unique character from the Star Wars universe. Born in {person?.birthYear} on planet {person?.homeworld?.name}, this {person?.gender} with {person?.hairColor} hair, {person?.eyeColor} eyes and {person?.skinColor} skin has height {person?.height} and weight {person?.mass}.
                  Whether hero or villain, {person?.name} plays an important role in the saga, showcasing the diversity of characters and worlds that make up this legendary galactic story.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

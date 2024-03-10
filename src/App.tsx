import {NavigationBar} from "./components/NavigationBar.tsx";
import {Divider} from "@nextui-org/react";
import {MoviesList} from "./components/MoviesList";
import {useState} from "react";
import {PlanetsList} from "./components/PlanetsList.tsx";
import {useDebounce} from "./hooks/useDebounce.ts";
import {CharactersList} from "./components/CharactersList.tsx";

const menuItems = [
    "Movies",
    "Planets",
    "Characters",
];

function App() {
    const [activeTab, setActiveTab] = useState(menuItems[0]);
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    return (
      <div className="p-4 flex-row justify-around items-center">
        <NavigationBar
          menuItems={menuItems}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <Divider className="my-4" />
          {activeTab === menuItems[0] && <MoviesList searchTerm={debouncedSearchTerm} />}
          {activeTab === menuItems[1] && <PlanetsList searchTerm={debouncedSearchTerm} />}
          {activeTab === menuItems[2] && <CharactersList searchTerm={debouncedSearchTerm} />}
      </div>
    )
}

export default App

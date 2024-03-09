import {NavigationBar} from "./components/NavigationBar.tsx";
import {Divider} from "@nextui-org/react";
import {MoviesList} from "./components/MoviesList";
import {useState} from "react";
import {PlanetsList} from "./components/PlanetsList.tsx";

const menuItems = [
    "Movies",
    "Planets",
    "Characters",
    "Ships",
];

function App() {
    const [activeTab, setActiveTab] = useState(menuItems[0]);
    return (
      <div className="p-4 flex-row justify-around items-center">
        <NavigationBar menuItems={menuItems} activeTab={activeTab} setActiveTab={setActiveTab} />
        <Divider className="my-4" />
          {activeTab === menuItems[0] && <MoviesList />}
          {activeTab === menuItems[1] && <PlanetsList />}
      </div>
    )
}

export default App

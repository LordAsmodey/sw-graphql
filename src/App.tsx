import {NavigationBar} from "./components/NavigationBar.tsx";
import {Divider} from "@nextui-org/react";
import {MoviesList} from "./components/MoviesList";
import {useState} from "react";

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
        <MoviesList />
      </div>
    )
}

export default App

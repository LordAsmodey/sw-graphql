import {NavigationBar} from "./components/NavigationBar.tsx";
import {MoviesList} from "./components/MoviesList.tsx";
import {Divider} from "@nextui-org/react";

function App() {
    return (
      <div className="p-4 flex-row justify-around items-center">
        <NavigationBar />
        <Divider className="my-4" />
        <MoviesList />
      </div>
    )
}

export default App
